import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TLState } from 'ducks/tl'
import type { AppState } from 'app/store'

export type FavsState = {
  favsList: TLState[]
}

const initialState: FavsState = {
  favsList: [],
}

export const slice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<{ tl: TLState; targetTLId: string }>) => {
      state.favsList = state.favsList.filter((fav) => fav.tlId !== action.payload.targetTLId)
      state.favsList.push({
        ...action.payload.tl,
        tlId: action.payload.targetTLId,
        updateDateUTC: Date.now(),
      })
    },
    removeFav: (state, action: PayloadAction<string>) => {
      state.favsList = state.favsList.filter((fav) => fav.tlId !== action.payload)
    },
  },
})

export const { addFav, removeFav } = slice.actions

export const selectFavs = (state: AppState): TLState[] => state.favs.favsList

export const selectExistTLInFavs = (state: AppState): boolean =>
  state.favs.favsList.filter((fav) => fav.tlId === state.tl.tlId).length !== 0

export default slice.reducer
