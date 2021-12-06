import { VFC } from 'react'
import {
  selectIsCharactersSelected,
  Character,
  changeCharacterComment,
  changeCharacterStar,
  changeCharacterSpecialLv,
  changeCharacterLv,
  changeCharacterRank,
} from 'ducks/tl'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { CHARACTERS_INFO, MAX_STAR } from 'lib/gameConstants'
import CharacterInputComponent from './presenter'

type Props = {
  index: number
  character: Character
}

const CharacterInput: VFC<Props> = ({ index, character }) => {
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const dispatch = useAppDispatch()
  const handleChangeCharacterComment = (value: string) =>
    dispatch(changeCharacterComment({ index, value }))

  const { maxStar } = CHARACTERS_INFO[character.name] ?? { maxStar: MAX_STAR }
  const handleChangeCharacterStar = (value: number) =>
    dispatch(changeCharacterStar({ index, value }))

  const handleChangeCharacterSpecialLv = (value: number) =>
    dispatch(changeCharacterSpecialLv({ index, value }))

  const handleChangeCharacterLv = (value: number) => dispatch(changeCharacterLv({ index, value }))

  const handleChangeCharacterRank = (value: number) =>
    dispatch(changeCharacterRank({ index, value }))

  return (
    <CharacterInputComponent
      character={character}
      isCharactersSelected={isCharactersSelected}
      handleChangeCharacterComment={handleChangeCharacterComment}
      handleChangeCharacterStar={handleChangeCharacterStar}
      handleChangeCharacterSpecialLv={handleChangeCharacterSpecialLv}
      handleChangeCharacterLv={handleChangeCharacterLv}
      handleChangeCharacterRank={handleChangeCharacterRank}
      maxStar={maxStar}
    />
  )
}

export default CharacterInput
