import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectTL, changeOperation, selectIsCharactersSelected, OperationType } from 'ducks/tl'
import Presenter from './presenter'

const OperationTypeInput: VFC = () => {
  const dispatch = useAppDispatch()
  const tl = useAppSelector(selectTL)
  const isCharactersSelected = useAppSelector(selectIsCharactersSelected)

  return (
    <Presenter
      tl={tl}
      changeOperation={(operation: OperationType) => dispatch(changeOperation(operation))}
      isCharactersSelected={isCharactersSelected}
    />
  )
}

export default OperationTypeInput
