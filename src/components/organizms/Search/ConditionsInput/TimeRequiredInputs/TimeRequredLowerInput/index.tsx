import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { changeTimeRequiredLower, selectTimeRequiredLower } from 'ducks/search'
import Presenter from './presenter'

const TimeRequredLowerInput: VFC = () => {
  const dispatch = useAppDispatch()
  const phaseCondition = useAppSelector(selectTimeRequiredLower)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTimeRequiredLower(parseInt(e.target.value, 10)))
  }
  const items = Array.from({ length: 91 }, (_, i) => i).map((element) => ({
    value: element,
    label: element,
  }))

  return <Presenter value={phaseCondition} items={items} onChange={onChange} disabled={false} />
}

export default TimeRequredLowerInput
