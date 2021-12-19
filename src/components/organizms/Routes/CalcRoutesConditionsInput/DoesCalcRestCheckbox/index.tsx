import { VFC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectDoesCalcRest, toggleDoesCalcRest } from 'ducks/routes'
import Presenter from './presenter'

const DoesCalcRestCheckbox: VFC = () => {
  const dispatch = useAppDispatch()
  const doesCalcRest = useAppSelector(selectDoesCalcRest)

  return (
    <Presenter
      doesCalcRest={doesCalcRest}
      toggleDoesCalcRest={() => dispatch(toggleDoesCalcRest())}
    />
  )
}

export default DoesCalcRestCheckbox
