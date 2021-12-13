import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from 'app/store'
import { TLState } from 'ducks/tl'

export type DBTLDataType = {
  tl: TLState
  fav: number
  userName: string
  userId: string
  userPhotoURL: string
}

export type SearchState = {
  searchResults: DBTLDataType[]
}

const initialState: SearchState = {
  searchResults: [],
}

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<DBTLDataType[]>) => {
      state.searchResults = action.payload
    },
    removeSearchResult: (state, action: PayloadAction<DBTLDataType>) => {
      state.searchResults = state.searchResults.filter(
        (searchResult) =>
          searchResult.tl.tlId !== action.payload.tl.tlId ||
          searchResult.userId !== action.payload.userId,
      )
    },
    doFav: (state, action: PayloadAction<DBTLDataType>) => {
      state.searchResults = state.searchResults.filter(
        (searchResult) =>
          searchResult.tl.tlId !== action.payload.tl.tlId ||
          searchResult.userId !== action.payload.userId,
      )
      state.searchResults.push({ ...action.payload, fav: action.payload.fav + 1 })
    },
  },
})

export const { setSearchResults, removeSearchResult, doFav } = slice.actions
export const selectSearchResults = (state: AppState): DBTLDataType[] => state.search.searchResults
export default slice.reducer
