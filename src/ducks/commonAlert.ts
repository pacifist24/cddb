import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'app/store'

export type CommonAlertState = {
  isOpen: boolean
  message: string
  anchorOrigin: {
    vertical: 'bottom' | 'top'
    horizontal: 'center' | 'left' | 'right'
  }
  severity: 'error' | 'info' | 'success' | 'warning'
  duration: number
}

const initialState: CommonAlertState = {
  isOpen: false,
  message: 'aaa',
  severity: 'error',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center',
  },
  duration: 10000,
}

export const commonAlertSlice = createSlice({
  name: 'commonAlert',
  initialState,
  reducers: {
    openAlert: (state, action: PayloadAction<Omit<CommonAlertState, 'isOpen'>>) => {
      state.isOpen = true
      state.message = action.payload.message
      state.severity = action.payload.severity
      state.anchorOrigin = action.payload.anchorOrigin
      state.duration = action.payload.duration
    },
    closeAlert: (state) => {
      state.isOpen = false
    },
  },
})

export const { openAlert, closeAlert } = commonAlertSlice.actions
export const selectCommonAlertState = (state: AppState): CommonAlertState => state.commonAlert
export default commonAlertSlice.reducer
