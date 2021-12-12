import { FC, createContext, useState, useContext, useMemo } from 'react'
import DialogTemplate from './DialogTemplate'

type CommonDialogState = {
  title: string
  description: string
  onClose: () => void
  buttons: {
    label: string
    handleClick: () => void
  }[]
  isOpen: boolean
}

type CommonDialogEventHandlerType = (state: Omit<CommonDialogState, 'isOpen'>) => void

const initialState: CommonDialogState = {
  title: '',
  description: '',
  onClose: () => undefined,
  buttons: [],
  isOpen: false,
}

const CommonDialogContext = createContext<CommonDialogEventHandlerType>(() => undefined)

export const CommonDialogProvider: FC = ({ children }) => {
  const [commonDialogState, setCommonDialogState] = useState<CommonDialogState>(initialState)

  const openDialog = useMemo(
    () => (state: Omit<CommonDialogState, 'isOpen'>) => {
      setCommonDialogState({
        ...state,
        isOpen: true,
      })
    },
    [],
  )

  const closeDialog = useMemo(
    () => () => {
      setCommonDialogState({ ...commonDialogState, isOpen: false })
    },
    [commonDialogState],
  )

  return (
    <>
      <CommonDialogContext.Provider value={openDialog}>{children}</CommonDialogContext.Provider>
      <DialogTemplate
        title={commonDialogState.title}
        description={commonDialogState.description}
        buttons={commonDialogState.buttons}
        isOpen={commonDialogState.isOpen}
        closeDialog={closeDialog}
        onClose={commonDialogState.onClose}
      />
    </>
  )
}

export const useCommonDialogContext = (): CommonDialogEventHandlerType =>
  useContext(CommonDialogContext)
