import { VFC } from 'react'
import { MAX_SPECIAL_LV } from 'lib/gameConstants'

type Props = {
  specialLv: number
  changeCharacterSpecialLv: (specialLv: number) => void
}

const CharacterSpecialLvInput: VFC<Props> = ({ specialLv, changeCharacterSpecialLv }) => (
  <select
    className="p-1 text-gray-600 appearance-none focus:outline-none"
    value={specialLv}
    onChange={(val) => changeCharacterSpecialLv(parseInt(val.target.value, 10))}
  >
    {Array.from(Array(MAX_SPECIAL_LV).keys())
      .map((val) => (
        <option value={val + 1} key={val}>
          専{val + 1}
        </option>
      ))
      .reverse()}
    <option value={0} key={0}>
      無し
    </option>
  </select>
)

export default CharacterSpecialLvInput
