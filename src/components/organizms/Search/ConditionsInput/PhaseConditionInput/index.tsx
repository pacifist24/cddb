import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectPhaseCondition, changePhaseCondition } from 'ducks/search'
import Presenter from './presenter'

const items = [
  {
    value: 0,
    label: '指定なし',
  },
  {
    value: 1,
    label: '1段階目',
  },
  {
    value: 2,
    label: '2段階目',
  },
  {
    value: 3,
    label: '3段階目',
  },
  {
    value: 4,
    label: '4段階目',
  },
  {
    value: 5,
    label: '5段階目',
  },
]

const PhaseConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const phaseCondition = useAppSelector(selectPhaseCondition)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changePhaseCondition(parseInt(e.target.value, 10)))
  }

  return <Presenter value={phaseCondition} items={items} onChange={onChange} disabled={false} />
}

export default PhaseConditionInput
