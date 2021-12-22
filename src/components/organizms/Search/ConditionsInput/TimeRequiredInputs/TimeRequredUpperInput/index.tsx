import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { changeTimeRequiredUpper, selectTimeRequiredUpper } from 'ducks/search'
import Presenter from './presenter'

const TimeRequredUpperInput: VFC = () => {
  const dispatch = useAppDispatch()
  const phaseCondition = useAppSelector(selectTimeRequiredUpper)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTimeRequiredUpper(parseInt(e.target.value, 10)))
  }
  const items = Array.from({ length: 91 }, (_, i) => i).map((element) => ({
    value: element,
    label: element,
  }))

  return <Presenter value={phaseCondition} items={items} onChange={onChange} disabled={false} />
}

export default TimeRequredUpperInput
