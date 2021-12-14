import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectDamageCondition, changeDamageCondition } from 'ducks/search'
import Presenter from './presenter'

const DamageConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const damageCondition = useAppSelector(selectDamageCondition)

  return (
    <Presenter
      damageCondition={damageCondition}
      changeDamageCondition={(value: number) => dispatch(changeDamageCondition(value))}
    />
  )
}

export default DamageConditionInput
