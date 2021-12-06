import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeBossName, sanitizeUB, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const BossNameInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const handleChangeBossName = (bossName: string) => {
    dispatch(changeBossName(bossName))
    dispatch(sanitizeUB())
  }

  return (
    <Presenter
      tl={tl}
      changeBossName={handleChangeBossName}
      isCharactersSelected={isCharactersSelected}
    />
  )
}

export default BossNameInput
