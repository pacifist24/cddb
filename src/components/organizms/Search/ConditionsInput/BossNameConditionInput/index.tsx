import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { changeBossNameConditon, selectBossNameCondition } from 'ducks/search'
import Presenter from './presenter'

const BossNameConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const bossNameConditon = useAppSelector(selectBossNameCondition)
  const handleChange = (bossNameCondition: string) => {
    dispatch(changeBossNameConditon(bossNameCondition))
  }

  return <Presenter bossNameCondition={bossNameConditon} changeBossNameCondition={handleChange} />
}

export default BossNameConditionInput
