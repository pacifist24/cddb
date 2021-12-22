import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectPhase, changePhase, selectIsCharactersSelected } from 'ducks/tl'
import Presenter from './presenter'

const PhaseInput: VFC = () => {
  const dispatch = useAppDispatch()
  const operation = useAppSelector(selectPhase)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changePhase(parseInt(e.target.value, 10)))
  const items = [
    { value: 1, label: '1段階目' },
    { value: 2, label: '2段階目' },
    { value: 3, label: '3段階目' },
    { value: 4, label: '4段階目' },
    { value: 5, label: '5段階目' },
  ]
  return (
    <Presenter
      value={operation}
      items={items}
      onChange={onChange}
      disabled={!isCharactersSelected}
    />
  )
}

export default PhaseInput
