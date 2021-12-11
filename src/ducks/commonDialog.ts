import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from 'app/store'

export type CommonDialogState = {
  title: string
  description: string
  onClose: () => void
  buttons: {
    label: string
    handleClick: () => void
  }[]
  isOpen: boolean
}

const initialState: CommonDialogState = {
  title: 'title',
  description: 'description',
  onClose: () => undefined,
  buttons: [],
  isOpen: false,
}

export const slice = createSlice({
  name: 'commonDialog',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<Omit<CommonDialogState, 'isOpen'>>) => {
      state.isOpen = true
      state.title = action.payload.title
      state.description = action.payload.description
      state.buttons = action.payload.buttons
    },
    closeDialog: (state) => {
      state.isOpen = false
    },
  },
})

export const { openDialog, closeDialog } = slice.actions
export const selectCommonDialogState = (state: AppState): CommonDialogState => state.commonDialog
export default slice.reducer
