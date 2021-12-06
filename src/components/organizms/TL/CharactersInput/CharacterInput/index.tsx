import { VFC } from 'react'
import { selectTL } from 'ducks/tl'
import { useAppSelector } from 'app/hooks'
import CharacterInputComponent from './presenter'

type Props = {
  index: number
}

const CharacterInput: VFC<Props> = ({ index }) => {
  const { name } = useAppSelector(selectTL).characters[index]

  return <CharacterInputComponent index={index} name={name} />
}

export default CharacterInput
