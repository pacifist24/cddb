import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeDifficulty, selectIsCharactersSelected, DifficultyType } from 'ducks/tl'
import Presenter from './presenter'

const DifficultyInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)

  return (
    <Presenter
      tl={tl}
      changeDifficulty={(difficulty: DifficultyType) => dispatch(changeDifficulty(difficulty))}
      isCharactersSelected={isCharactersSelected}
    />
  )
}

export default DifficultyInput
