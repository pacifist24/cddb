import { CHARACTERS_INFO, MAX_SPECIAL_LV } from 'lib/gameConstants'

/** 01:20⇒80のように分秒表記を秒に変更 */
export const timeStr2Num = (timeStr: string): number =>
  parseInt(timeStr.substr(0, 2), 10) * 60 + parseInt(timeStr.substr(3, 2), 10)

/** 80⇒01:20のように秒を分秒表記に変更 */
export const timeNum2Str = (timeNum: number): string => {
  const min = Math.floor(timeNum / 60)
  const sec = timeNum % 60

  return `${`00${min}`.slice(-2)}:${`00${sec}`.slice(-2)}`
}

/** キャラ名から専用装備の有無を確認し、専用レベルのデフォルト値を返す */
export const getDefaultSpecialLv = (name: string): number => {
  if (CHARACTERS_INFO[name] && CHARACTERS_INFO[name].hasSpecial) {
    return MAX_SPECIAL_LV
  }

  return 0
}

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
export const makePaddedNameList = (
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

/** length桁のランダム文字列を生成する（セキュアではない） */
export const generateRandomStr = (length: number): string => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  return Array.from(Array(length))
    .map(() => chars[Math.floor(Math.random() * chars.length)])
    .join('')
}

/** tlIdを生成（セキュアではない） */
export const generateTLId = (): string => generateRandomStr(16)

/** twitter風にfromとtoの時間差を文字列にして返す */
export const calcDiffDate = (from: Date, to = new Date()): string => {
  const diff = to.getTime() - from.getTime()
  const elapsed = new Date(diff)
  // 大きい単位から順に表示
  if (elapsed.getUTCFullYear() - 1970) {
    return `${elapsed.getUTCFullYear() - 1970}年前`
  }
  if (elapsed.getUTCMonth()) {
    return `${elapsed.getUTCMonth()}ヶ月前`
  }
  if (elapsed.getUTCDate() - 1) {
    return `${elapsed.getUTCDate() - 1}日前`
  }
  if (elapsed.getUTCHours()) {
    return `${elapsed.getUTCHours()}時間前`
  }
  if (elapsed.getUTCMinutes()) {
    return `${elapsed.getUTCMinutes()}分前`
  }
  return `${elapsed.getUTCSeconds()}秒前`
}
