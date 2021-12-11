import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeAccidentRate, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const AccidentRateInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)

  return (
    <Presenter
      tl={tl}
      changeAccidentRate={(accidentRate: number) => dispatch(changeAccidentRate(accidentRate))}
      isCharactersSelected={isCharactersSelected}
    />
  )
}

export default AccidentRateInput
