import { VFC, ChangeEvent } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import {
  selectOperation,
  changeOperation,
  selectIsCharactersSelected,
  OperationType,
} from 'ducks/tl'
import Presenter from './presenter'

const OperationTypeInput: VFC = () => {
  const dispatch = useAppDispatch()
  const operation = useAppSelector(selectOperation)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch(changeOperation(e.target.value as OperationType))
  const items = [
    { value: 'manual', label: 'マニュアル' },
    { value: 'semiAuto', label: 'セミオート' },
    { value: 'fullAuto', label: 'フルオート' },
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

export default OperationTypeInput
