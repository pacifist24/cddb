import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { AppState } from 'app/store'

export type ArrangeType = 'none' | 'same' | 'next'

export type StyleState = {
  startTime: number
  shouldArrangeHorizontally: ArrangeType
  nameConversionTable: { [key: string]: string }
}

const initialState: StyleState = {
  startTime: 90,
  shouldArrangeHorizontally: 'same',
  nameConversionTable: {},
}

export const styleSlice = createSlice({
  name: 'style',
  initialState,
  reducers: {
    addNameConversionRule: (state, action: PayloadAction<{ key: string; value: string }>) => {
      state.nameConversionTable[action.payload.key] = action.payload.value
    },
    deleteNameConversionRule: (state, action: PayloadAction<string>) => {
      delete state.nameConversionTable[action.payload]
    },
    initNameConversionRule: (state, action: PayloadAction<{ [key: string]: string }>) => {
      state.nameConversionTable = action.payload
    },
    changeArrangement: (state, action: PayloadAction<ArrangeType>) => {
      state.shouldArrangeHorizontally = action.payload
    },
    changeStartTime: (state, action: PayloadAction<number>) => {
      state.startTime = action.payload
    },
    loadStyle: (state, action: PayloadAction<StyleState>) => {
      state.nameConversionTable = action.payload.nameConversionTable
      state.shouldArrangeHorizontally = action.payload.shouldArrangeHorizontally
      state.startTime = action.payload.startTime
    },
  },
})

export const {
  addNameConversionRule,
  deleteNameConversionRule,
  initNameConversionRule,
  changeArrangement,
  changeStartTime,
  loadStyle,
} = styleSlice.actions

export const selectNameConversionTable = (state: AppState): { [key: string]: string } =>
  state.style.nameConversionTable

export const selectArrangement = (state: AppState): ArrangeType =>
  state.style.shouldArrangeHorizontally
export const selectStartTime = (state: AppState): number => state.style.startTime

export const selectStyle = (state: AppState): StyleState => state.style

export default styleSlice.reducer
