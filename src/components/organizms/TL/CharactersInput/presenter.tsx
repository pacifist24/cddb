import { VFC } from 'react'
import { Character } from 'ducks/tl'
import CharacterInput from './CharacterInput'

type Props = {
  characters: Character[]
}

const CharactersInput: VFC<Props> = ({ characters }) => (
  <>
    {characters.length === 5 &&
      Array.from(Array(5).keys()).map((index) => (
        <div className="mt-2 ml-3">
          <CharacterInput index={index} key={characters[index].name} />
        </div>
      ))}
    a
  </>
)

export default CharactersInput
