import { VFC } from 'react'
import { MAX_LV } from 'lib/gameConstants'

type Props = {
  lv: number
  changeCharacterLv: (lv: number) => void
}

const CharacterLvInput: VFC<Props> = ({ lv, changeCharacterLv }) => (
  <select
    className="p-1 text-gray-600 appearance-none focus:outline-none"
    value={lv}
    onChange={(val) => changeCharacterLv(parseInt(val.target.value, 10))}
  >
    {Array.from(Array(MAX_LV).keys())
      .map((val) => (
        <option value={val + 1} key={val}>
          Lv
          {val + 1}
        </option>
      ))
      .reverse()}
  </select>
)

export default CharacterLvInput
