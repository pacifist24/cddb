import { VFC } from 'react'
import { selectTL } from 'ducks/tl'
import { useAppSelector } from 'app/hooks'
import CharactersInputComponent from './presenter'

const CharactersInput: VFC = () => {
  const tl = useAppSelector(selectTL)

  return <CharactersInputComponent characters={tl.characters} />
}

export default CharactersInput
