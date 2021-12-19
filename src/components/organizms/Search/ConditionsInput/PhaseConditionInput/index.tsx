import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectPhaseCondition, changePhaseCondition } from 'ducks/search'
import Presenter from './presenter'

const PhaseConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const phaseCondition = useAppSelector(selectPhaseCondition)

  return (
    <Presenter
      phaseCondition={phaseCondition}
      onChange={(value: number) => dispatch(changePhaseCondition(value))}
    />
  )
}

export default PhaseConditionInput
