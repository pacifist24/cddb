import { TLState } from 'ducks/tl'
import { FULL_BATTLE_TIME, LAST_ATTACK_BONUS_TIME } from 'lib/gameConstants'

type ExcludeSupportTL = {
  id: string // TLID
  consumptionCharacters: string[] // 編成5キャラからサポートを抜いた4キャラ
  requreTime: number // バトル時間
}

/** 例えばオウカ、ユカリ、ネネカ、キャル、ルナという編成があったら
オウカ、ユカリ、ネネカ、キャルのようにサポートを除いた4キャラの組み合わせを5つ作る
これを全てのFavsに対して行う */
export const calcExcludeSupportArray = (tls: TLState[]): ExcludeSupportTL[] => {
  const retArr: ExcludeSupportTL[] = []
  tls.forEach((tl) => {
    const fullCharacters = tl.characters.map((character) => character.name)
    fullCharacters.forEach((characterExclude) => {
      retArr.push({
        id: tl.tlId,
        consumptionCharacters: fullCharacters.filter((character) => characterExclude !== character),
        requreTime: tl.startTime - tl.endTime,
      })
    })
  })
  // TODO: 時間順に並び替えたほうが良いかも
  return retArr
}

type CombinationOfAttackAndRestType = {
  idAttack: string // 本凸のTLID
  idRest: string // 持ち越し凸のTLID
  consumptionCharacters: string[] // 凸で消費するキャラ4~8体
  requreTime: number // 2凸での合計バトル時間-20秒
}

/** 1凸分の本凸-持ち越し凸の組み合わせを抽出する */
export const calcCombinationOfAttackAndRest = (
  excludeSupportArray: ExcludeSupportTL[],
  doesCalcRest: boolean, // 持ち越し編成を計算検索するか？
): CombinationOfAttackAndRestType[] => {
  const combinationOfAttackAndRestArray: CombinationOfAttackAndRestType[] = []

  for (let i = 0; i < excludeSupportArray.length; i += 1) {
    const attack = excludeSupportArray[i]
    // 持ち越し凸無しの場合
    combinationOfAttackAndRestArray.push({
      idAttack: attack.id,
      idRest: '',
      consumptionCharacters: attack.consumptionCharacters,
      requreTime: attack.requreTime,
    })
    if (doesCalcRest) {
      // 持ち越し凸有りの場合
      // 持ち越し凸を探す（本凸と持ち越しが逆になっただけのものは含めない）
      for (let j = i; j < excludeSupportArray.length; j += 1) {
        const rest = excludeSupportArray[j]
        // 90秒以内に終わる本凸-持ち越し凸を全て書き出す
        const requreTime = attack.requreTime + rest.requreTime - LAST_ATTACK_BONUS_TIME + 1
        if (requreTime <= FULL_BATTLE_TIME) {
          combinationOfAttackAndRestArray.push({
            idAttack: attack.id,
            idRest: rest.id,
            consumptionCharacters: Array.from(
              new Set(attack.consumptionCharacters.concat(rest.consumptionCharacters)),
            ),
            requreTime,
          })
        }
      }
    }
  }
  return combinationOfAttackAndRestArray
}

/** キャラクターが被ってるかどうか調べる */
const existCharacterDuplicate = (...characters: string[][]) => {
  const mergedCharacters = characters.reduce(
    (previous, current) => previous.concat(current),
    [] as string[],
  )
  const lengthSum = mergedCharacters.length
  return Array.from(new Set(mergedCharacters)).length !== lengthSum
}

/** 凸ルートを検索する */
export const calcAttackRoutes = (
  tls: TLState[], // 検索対象のTL（グループ名でフィルター済み前提）
  attackNum: number, // 何凸分のルートを計算するか
  doesCalcRest: boolean, // 持ち越しルートも計算するか
  excludedCharacters: string[], // 検索対象から外すキャラ
): { routes: string[][]; tlDic: { [key: string]: TLState } } => {
  /* 例えばオウカ、ユカリ、ネネカ、キャル、ルナという編成があったら
  オウカ、ユカリ、ネネカ、キャルのようにサポートを除いた4キャラの組み合わせを5つ作る */
  const excludeSupportArray = calcExcludeSupportArray(tls)
  /* 合計が90+20秒になるような本凸-持ち越し凸の組み合わせを全通り作る */
  const combination = calcCombinationOfAttackAndRest(excludeSupportArray, doesCalcRest)

  const routes: { [key: string]: string[] } = {}
  if (attackNum === 3) {
    // 3凸分計算する場合
    for (let i = 0; i < combination.length - 2; i += 1) {
      // 1凸目
      const attack1 = combination[i]
      if (!existCharacterDuplicate(attack1.consumptionCharacters, excludedCharacters)) {
        // キャラに重複が無い場合処理続行
        for (let j = i + 1; j < combination.length - 1; j += 1) {
          // 2凸目
          const attack2 = combination[j]
          if (
            // キャラに重複が無い場合処理続行
            !existCharacterDuplicate(
              attack1.consumptionCharacters,
              attack2.consumptionCharacters,
              excludedCharacters,
            )
          ) {
            for (let k = j + 1; k < combination.length; k += 1) {
              // 3凸目
              const attack3 = combination[k]
              if (
                // キャラに重複が無い場合処理続行
                !existCharacterDuplicate(
                  attack1.consumptionCharacters,
                  attack2.consumptionCharacters,
                  attack3.consumptionCharacters,
                  excludedCharacters,
                )
              ) {
                const routeIds = [
                  attack1.idAttack, // 1凸目本凸のTLID
                  attack1.idRest, // 1凸目持ち越し凸のTLID
                  attack2.idAttack, // 2凸目本凸のTLID
                  attack2.idRest, // 2凸目持ち越し凸のTLID
                  attack3.idAttack, // 3凸目本凸のTLID
                  attack3.idRest, // 3凸目持ち越し凸のTLID
                ]
                routes[routeIds.join()] = routeIds
              }
            }
          }
        }
      }
    }
  } else if (attackNum === 2) {
    // 2凸分計算する場合
    for (let i = 0; i < combination.length - 2; i += 1) {
      // 1凸目
      const attack1 = combination[i]
      if (!existCharacterDuplicate(attack1.consumptionCharacters, excludedCharacters)) {
        // キャラに重複が無い場合処理続行
        for (let j = i + 1; j < combination.length - 1; j += 1) {
          // 2凸目
          const attack2 = combination[j]
          if (
            // キャラに重複が無い場合処理続行
            !existCharacterDuplicate(
              attack1.consumptionCharacters,
              attack2.consumptionCharacters,
              excludedCharacters,
            )
          ) {
            const routeIds = [
              attack1.idAttack, // 1凸目本凸のTLID
              attack1.idRest, // 1凸目持ち越し凸のTLID
              attack2.idAttack, // 2凸目本凸のTLID
              attack2.idRest, // 2凸目持ち越し凸のTLID
              '', // 3凸目本凸のTLID
              '', // 3凸目持ち越し凸のTLID
            ]
            routes[routeIds.join()] = routeIds
          }
        }
      }
    }
  } else {
    // 1凸計算する場合
    for (let i = 0; i < combination.length - 2; i += 1) {
      // 1凸目
      const attack1 = combination[i]
      if (!existCharacterDuplicate(attack1.consumptionCharacters, excludedCharacters)) {
        // キャラに重複が無い場合処理続行
        const routeIds = [
          attack1.idAttack, // 1凸目本凸のTLID
          attack1.idRest, // 1凸目持ち越し凸のTLID
          '', // 2凸目本凸のTLID
          '', // 2凸目持ち越し凸のTLID
          '', // 3凸目本凸のTLID
          '', // 3凸目持ち越し凸のTLID
        ]
        routes[routeIds.join()] = routeIds
      }
    }
  }
  // tlsを辞書型に変換
  const tlDic: { [key: string]: TLState } = {}
  tls.forEach((tl) => {
    tlDic[tl.tlId] = tl
  })

  // 数が多いと表示に困るのでダメージが出る順に並び変える
  const bestOfNRoutes = Object.keys(routes)
    .sort((key1, key2) => {
      const route1 = routes[key1]
      const route2 = routes[key2]
      // route1の時のダメージ数値
      const damage1 = route1
        .map((tlId) => (tlId ? tlDic[tlId].damage : 0))
        .reduce((sum, damage) => sum + damage)
      // route2の時のダメージ数値
      const damage2 = route2
        .map((tlId) => (tlId ? tlDic[tlId].damage : 0))
        .reduce((sum, damage) => sum + damage)

      return damage2 - damage1
    })
    .map((routesId) => routes[routesId])
  // .slice(0, 100000) // とりあえず100000にしとく
  return {
    routes: bestOfNRoutes,
    tlDic,
  }
}
