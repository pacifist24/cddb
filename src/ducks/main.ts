import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from 'app/store'

export type ContentType = 'tl' | 'config' | 'favs' | 'search' | 'name' | 'route' | 'output'

export type MainState = {
  displayedContent: ContentType
}

const initialState: MainState = {
  displayedContent: 'search',
}

export const slice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeDisplayedContent: (state, action: PayloadAction<ContentType>) => {
      state.displayedContent = action.payload
    },
  },
})

export const { changeDisplayedContent } = slice.actions
export const selectDisplayedContent = (state: AppState): ContentType => state.main.displayedContent
export default slice.reducer
