import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectAccidentRateCondition, changeAccidentRateCondition } from 'ducks/search'
import Presenter from './presenter'

const AccidentRateConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const likeNumCondition = useAppSelector(selectAccidentRateCondition)

  return (
    <Presenter
      accidentRateCondition={likeNumCondition}
      changeAccidentRateCondition={(value: number) => dispatch(changeAccidentRateCondition(value))}
    />
  )
}

export default AccidentRateConditionInput
