import { FC, createContext, useState, useContext, useMemo } from 'react'
import AlertTemplate, { CommonAlertState } from './presenter'

type CommonAlertEventHandlerType = (state: Omit<CommonAlertState, 'isOpen'>) => void

const initialState: CommonAlertState = {
  isOpen: false,
  message: '',
  severity: 'error',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  duration: 0,
}

const CommonAlertContext = createContext<CommonAlertEventHandlerType>(() => undefined)

export const CommonAlertProvider: FC = ({ children }) => {
  const [commonAlertState, setCommonAlertState] = useState<CommonAlertState>(initialState)

  const openAlert = useMemo(
    () => (state: Omit<CommonAlertState, 'isOpen'>) => {
      setCommonAlertState({
        ...state,
        isOpen: true,
      })
    },
    [],
  )

  const closeAlert = useMemo(
    () => () => {
      setCommonAlertState({ ...commonAlertState, isOpen: false })
    },
    [commonAlertState],
  )

  return (
    <>
      <CommonAlertContext.Provider value={openAlert}>{children}</CommonAlertContext.Provider>
      <AlertTemplate commonAlertState={commonAlertState} handleClose={closeAlert} />
    </>
  )
}

export const useCommonAlertContext = (): CommonAlertEventHandlerType =>
  useContext(CommonAlertContext)
