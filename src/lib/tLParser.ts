import { TLState } from 'ducks/tl'
import { timeStr2Num, getDefaultSpecialLv } from 'lib/util'
import { CHARACTERS_INFO } from 'lib/gameConstants'

// プリコネのTL書き出し機能により出力された文字列から情報を抜き出す
const parseTlData = (text: string): TLState | null => {
  const generateLineReader = () => {
    const lines: string[] = text.split(/\r\n|\n/).filter((line: string) => line !== '')
    let lineIndex = 0

    return () => {
      if (lineIndex < lines.length) {
        lineIndex += 1

        return lines[lineIndex - 1].split(' ')
      }

      return []
    }
  }
  const lineReader = generateLineReader()
  const tlData: TLState = <TLState>{}
  tlData.comment = ''

  // 1行目
  // クランモード 5段階目 シードレイク
  let line = lineReader()
  if (line.length >= 3) {
    if (!Number.isNaN(line[1].replace('段階目', ''))) {
      tlData.phase = parseInt(line[1].replace('段階目', ''), 10)
    } else {
      return null
    }
    tlData.bossName = line[2]
  } else {
    return null
  }

  // 2行目
  // 32702296ダメージ
  line = lineReader()
  if (line.length >= 1 && !Number.isNaN(line[0].replace('ダメージ', ''))) {
    tlData.damage = Math.floor(parseInt(line[0].replace('ダメージ', ''), 10) / 10000)
  } else {
    return null
  }

  // 3行目
  // バトル時間 01:30
  line = lineReader()
  // 4行目
  // バトル日時 2021/06/29 22:40
  line = lineReader()
  // 5行目
  // ----
  line = lineReader()
  // 6行目
  // ◆パーティ編成
  line = lineReader()

  // 7~11行目
  // アカリ ★6 Lv202 RANK14
  // サレン（サマー） ★3 Lv202 RANK14
  // ネネカ ★5 Lv202 RANK21
  // キャル（ニューイヤー） ★4 Lv202 RANK21
  // ルナ ★5 Lv202 RANK21
  tlData.characters = []
  for (let i = 0; i < 5; i += 1) {
    line = lineReader()
    if (
      line.length >= 4 &&
      !Number.isNaN(line[1].replace('★', '')) &&
      !Number.isNaN(line[2].replace('Lv', '')) &&
      !Number.isNaN(line[3].replace('RANK', '')) &&
      CHARACTERS_INFO[line[0]]
    ) {
      tlData.characters.push({
        lv: parseInt(line[2].replace('Lv', ''), 10),
        name: line[0],
        star: parseInt(line[1].replace('★', ''), 10),
        rank: parseInt(line[3].replace('RANK', ''), 10),
        specialLv: getDefaultSpecialLv(line[0]),
        comment: '',
      })
    } else {
      return null
    }
  }

  // 12行目
  // ----
  line = lineReader()
  // 13行目
  // ◆ユニオンバースト発動時間
  line = lineReader()

  // 14行目
  // 01:30 バトル開始
  line = lineReader()
  if (line.length >= 1 && /^0[0-1]:[0-5][0-9]$/.test(line[0])) {
    tlData.startTime = timeStr2Num(line[0])
  } else {
    return null
  }

  line = lineReader()
  tlData.timeline = []
  while (line.length >= 2) {
    if (line[1] === 'バトル終了' && /^0[0-1]:[0-5][0-9]$/.test(line[0])) {
      tlData.endTime = timeStr2Num(line[0])
    } else if (
      /^0[0-1]:[0-5][0-9]$/.test(line[0]) &&
      (tlData.characters.map((character) => character.name).includes(line[1]) ||
        tlData.bossName === line[1])
    ) {
      tlData.timeline.push({
        id: Math.random(),
        name: line[1],
        time: timeStr2Num(line[0]),
        comment: '',
      })
    }
    line = lineReader()
  }

  return tlData
}

export default parseTlData
