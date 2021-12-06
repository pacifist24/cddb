import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeDamage, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const DamageInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)

  return (
    <Presenter
      tl={tl}
      changeDamage={(damage) => dispatch(changeDamage(damage))}
      isCharactersSelected={isCharactersSelected}
    />
  )
}

export default DamageInput
