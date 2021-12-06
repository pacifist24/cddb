import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changePhase, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const PhaseInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)

  return (
    <Presenter
      tl={tl}
      handleChangePhase={(phase) => dispatch(changePhase(phase))}
      isCharactersSelected={isCharactersSelected}
    />
  )
}

export default PhaseInput
