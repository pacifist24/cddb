import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectBossName, changeBossName, sanitizeUB, selectIsCharactersSelected } from 'ducks/tl'
import { BOSSES_INFO } from 'lib/gameConstants'
import Presenter from './presenter'

const BossNameInput: VFC = () => {
  const dispatch = useAppDispatch()
  const bossName = useAppSelector(selectBossName)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeBossName(e.target.value))
    dispatch(sanitizeUB())
  }
  const items = Object.keys(BOSSES_INFO).map((element) => ({
    value: element,
    label: element,
  }))
  return (
    <Presenter
      value={bossName}
      items={items}
      onChange={onChange}
      disabled={!isCharactersSelected}
    />
  )
}

export default BossNameInput
