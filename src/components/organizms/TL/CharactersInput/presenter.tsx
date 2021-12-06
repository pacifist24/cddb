import { VFC } from 'react'
import { Character } from 'ducks/tl'
import CharacterInput from './CharacterInput'

type Props = {
  characters: Character[]
}

const CharactersInput: VFC<Props> = ({ characters }) => (
  <>
    {Array.from(Array(5).keys()).map((index) => (
      <div className="mt-2" key={characters[index].name}>
        <CharacterInput index={index} character={characters[index]} />
      </div>
    ))}
  </>
)

export default CharactersInput
