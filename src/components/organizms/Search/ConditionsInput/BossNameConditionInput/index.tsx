import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { changeBossNameConditon, selectBossNameCondition } from 'ducks/search'
import { BOSSES_INFO } from 'lib/gameConstants'
import Presenter from './presenter'

const BossNameConditionInput: VFC = () => {
  const dispatch = useAppDispatch()
  const bossNameConditon = useAppSelector(selectBossNameCondition)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeBossNameConditon(e.target.value))
  }
  const items = [{ value: '', label: '指定なし' }].concat(
    Object.keys(BOSSES_INFO).map((element) => ({
      value: element,
      label: element,
    })),
  )

  return <Presenter value={bossNameConditon} items={items} onChange={onChange} disabled={false} />
}

export default BossNameConditionInput
