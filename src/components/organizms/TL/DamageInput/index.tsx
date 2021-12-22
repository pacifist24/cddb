import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectDamage, changeDamage, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const DamageInput: VFC = () => {
  const dispatch = useAppDispatch()
  const damage = useAppSelector(selectDamage)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeDamage(parseInt(e.target.value, 10)))

  return <Presenter value={damage} onChange={onChange} disabled={!isCharactersSelected} />
}

export default DamageInput
