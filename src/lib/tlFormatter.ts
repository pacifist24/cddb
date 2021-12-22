import { TLState } from 'ducks/tl'
import { ArrangeType } from 'ducks/style'
import { timeNum2Str } from 'lib/util'

// 半角は1文字 全角は2文字として文字数をカウント
const getLen = (str: string) => {
  let halfCount = 0
  let fullCount = 0
  for (let i = 0; i < str.length; i += 1) {
    const chr = str.charCodeAt(i)
    if (
      (chr >= 0x00 && chr < 0x81) ||
      chr === 0xf8f0 ||
      (chr >= 0xff61 && chr < 0xffa0) ||
      (chr >= 0xf8f1 && chr < 0xf8f4)
    ) {
      // 半角文字の場合は1を加算
      halfCount += 1
    } else {
      // それ以外の文字の場合は2を加算
      fullCount += 1
    }
  }

  // 結果を返す
  return [halfCount, fullCount]
}

/** 最大の長さの名前にあわせてパディングを入れる */
const makePaddedNameList = (
  nameList: string[],
  nameConversionTable: { [key: string]: string },
): { [key: string]: string } => {
  const maxHalfLength = Math.max(
    ...nameList.map((name) => getLen(nameConversionTable[name] ?? name)[0]),
  )
  const maxFullLength = Math.max(
    ...nameList.map((name) => getLen(nameConversionTable[name] ?? name)[1]),
  )

  const resultList = {}

  nameList.forEach((name) => {
    const [halfLength, fullLength] = getLen(nameConversionTable[name] ?? name)
    resultList[name] =
      (nameConversionTable[name] ?? name) +
      ' '.repeat(maxHalfLength - halfLength) +
      '　'.repeat(maxFullLength - fullLength)
  })

  return resultList
}

/** TL情報から画面右に表示されるTL詳細用の文字列を生成する */
const formatTL = (
  tlData: TLState,
  nameConversionTable: { [key: string]: string },
  arrange: ArrangeType = 'next',
  startTime = 90,
): string[] => {
  // TLがまだ記述されていない場合は空配列を返す
  if (tlData.bossName === '' || tlData.characters.length !== 5) {
    return []
  }

  let tlTextLines: string[] = []
  if (tlData.comment) {
    tlTextLines.push(tlData.comment)
  }
  tlTextLines.push(`【${tlData.phase}段階目 ${tlData.bossName} ${tlData.damage}万】`)

  const paddedNameList = makePaddedNameList(
    tlData.characters.map((character) => character.name),
    nameConversionTable,
  )

  tlTextLines = tlTextLines.concat(
    tlData.characters.map(
      (character) =>
        `${paddedNameList[character.name]} ${character.star}/${character.rank}${
          character.specialLv === 0 ? ' ' : `/${character.specialLv} `
        }${character.comment}`,
    ),
  )
  tlTextLines.push('　')

  const lessTime = tlData.startTime - startTime
  tlTextLines.push(`<${timeNum2Str(tlData.startTime - lessTime).substr(1)} バトル開始>`)
  tlTextLines.push('　')
  if (arrange === 'none') {
    for (let i = 0; i < tlData.timeline.length; i += 1) {
      const line = tlData.timeline[i]
      if (line.time - lessTime < 1) {
        // 時間不足によりUBが打てなければ以降をカット
        break
      }
      if (line.name === tlData.bossName) {
        tlTextLines.push('　')
        tlTextLines.push(
          `--- ${timeNum2Str(line.time - lessTime).substr(1)} BOSS --- ${line.comment}`,
        )
        tlTextLines.push('　')
      } else {
        tlTextLines.push(
          `${timeNum2Str(line.time - lessTime).substr(1)} ${paddedNameList[line.name]} ${
            line.comment
          }`,
        )
      }
    }
  } else {
    let i = 0
    while (i < tlData.timeline.length) {
      const line = tlData.timeline[i]
      if (line.time - lessTime < 1) {
        // 時間不足によりUBが打てなければ以降をカット
        break
      }
      if (line.name === tlData.bossName) {
        tlTextLines.push('　')
        tlTextLines.push(
          `--- ${timeNum2Str(line.time - lessTime).substr(1)} BOSS --- ${line.comment}`,
        )
        tlTextLines.push('　')
      } else {
        let subNames = ''
        for (let j = i + 1; j < tlData.timeline.length; j += 1) {
          const subLine = tlData.timeline[j]
          if (
            subLine.name !== tlData.bossName &&
            subLine.comment === '' &&
            line.time === subLine.time
          ) {
            subNames += ` ${nameConversionTable[subLine.name] ?? subLine.name}`
            i = j
          } else {
            break
          }
        }

        if (arrange === 'same') {
          tlTextLines.push(
            `${timeNum2Str(line.time - lessTime).substr(1)} ${
              nameConversionTable[line.name] ?? line.name
            }${subNames} ${line.comment ? '[' : ''}${line.comment}${line.comment ? ']' : ''}`,
          )
        } else {
          tlTextLines.push(
            `${timeNum2Str(line.time - lessTime).substr(1)} ${
              nameConversionTable[line.name] ?? line.name
            } ${line.comment ? '[' : ''}${line.comment}${line.comment ? ']' : ''}`,
          )
          if (subNames !== '') {
            tlTextLines.push(`⇒${subNames}`)
          }
        }
      }
      i += 1
    }
  }
  tlTextLines.push('　')
  tlTextLines.push(
    `<${timeNum2Str(tlData.endTime - lessTime > 0 ? tlData.endTime - lessTime : 0).substr(
      1,
    )} バトル終了>`,
  )

  return tlTextLines
}

export default formatTL
