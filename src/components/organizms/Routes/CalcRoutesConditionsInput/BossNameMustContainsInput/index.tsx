import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { changeBossNameMustContains, selectBossNameMustContains } from 'ducks/routes'
import { BOSSES_INFO } from 'lib/gameConstants'
import Presenter from './presenter'

const BossNameMustContainsInput: VFC = () => {
  const dispatch = useAppDispatch()
  const bossNameMustContains = useAppSelector(selectBossNameMustContains)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeBossNameMustContains(e.target.value))
  }
  const items = [{ value: '', label: '指定なし' }].concat(
    Object.keys(BOSSES_INFO).map((element) => ({
      value: element,
      label: element,
    })),
  )

  return (
    <Presenter value={bossNameMustContains} items={items} onChange={onChange} disabled={false} />
  )
}

export default BossNameMustContainsInput
