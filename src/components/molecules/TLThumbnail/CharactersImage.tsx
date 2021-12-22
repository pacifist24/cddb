import { VFC } from 'react'
import { Character } from 'ducks/tl'

type Props = {
  characters: Character[]
}

const CharactersImage: VFC<Props> = ({ characters }) => (
  <div className="flex">
    {characters.map((character) => (
      <img
        src={`/characters/${character.name}.png`}
        className="w-14 h-14"
        key={character.name}
        alt={character.name}
      />
    ))}
  </div>
)

export default CharactersImage
