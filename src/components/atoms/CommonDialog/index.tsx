import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectCommonDialogState, closeDialog } from 'ducks/commonDialog'
import Presenter from './presenter'

const CharactersSelectButton: VFC = () => {
  const dispatch = useAppDispatch()
  const commonDialogState = useAppSelector(selectCommonDialogState)

  return (
    <Presenter
      title={commonDialogState.title}
      description={commonDialogState.description}
      onClose={commonDialogState.onClose}
      buttons={commonDialogState.buttons}
      isOpen={commonDialogState.isOpen}
      closeDialog={() => dispatch(closeDialog())}
    />
  )
}

export default CharactersSelectButton
