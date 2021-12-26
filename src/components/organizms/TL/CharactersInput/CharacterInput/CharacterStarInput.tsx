import { VFC } from 'react'

type Props = {
  star: number
  maxStar: number
  changeCharacterStar: (star: number) => void
  isCharactersSelected: boolean
}

const CharacterStarInput: VFC<Props> = ({
  star,
  maxStar,
  changeCharacterStar,
  isCharactersSelected,
}) => (
  <select
    className="p-1 text-gray-600 bg-transparent appearance-none focus:outline-none"
    value={star}
    onChange={(val) => changeCharacterStar(parseInt(val.target.value, 10))}
    disabled={!isCharactersSelected}
  >
    {Array.from(Array(maxStar).keys())
      .map((val) => (
        <option value={val + 1} key={val}>
          ★{val + 1}
        </option>
      ))
      .reverse()}
  </select>
)

export default CharacterStarInput
