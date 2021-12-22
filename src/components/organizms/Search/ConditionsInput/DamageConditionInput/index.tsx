import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectDamageCondition, changeDamageCondition } from 'ducks/search'
import Presenter from './presenter'

const DamageConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const damageCondition = useAppSelector(selectDamageCondition)
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeDamageCondition(parseInt(e.target.value, 10)))
  return <Presenter value={damageCondition} onChange={onChange} disabled={false} />
}

export default DamageConditionInput
