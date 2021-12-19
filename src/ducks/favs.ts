import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TLState } from 'ducks/tl'
import type { AppState } from 'app/store'

export type FavState = {
  tl: TLState
  group: string
}

export type FavsState = {
  favsList: FavState[]
  groupList: string[]
  selectedGroup: string
}

const initialState: FavsState = {
  favsList: [],
  groupList: [],
  selectedGroup: '',
}

export const slice = createSlice({
  name: 'favs',
  initialState,
  reducers: {
    addFav: (state, action: PayloadAction<{ tl: TLState; group: string; targetTLId: string }>) => {
      state.favsList = state.favsList.filter((fav) => fav.tl.tlId !== action.payload.targetTLId)
      state.favsList.push({
        tl: {
          ...action.payload.tl,
          tlId: action.payload.targetTLId,
          updateDateUTC: Date.now(),
        },
        group: action.payload.group,
      })
    },
    removeFav: (state, action: PayloadAction<string>) => {
      state.favsList = state.favsList.filter((fav) => fav.tl.tlId !== action.payload)
    },
    loadFavs: (state, action: PayloadAction<FavsState>) => {
      state.favsList = action.payload.favsList
      state.groupList = action.payload.groupList
      state.selectedGroup = action.payload.selectedGroup
    },
    addGroup: (state, action: PayloadAction<string>) => {
      if (!state.groupList.includes(action.payload)) {
        state.groupList.push(action.payload)
      }
    },
    removeGroup: (state, action: PayloadAction<string>) => {
      // グループを除去
      state.groupList = state.groupList.filter((groupName) => groupName !== action.payload)
      // グループに紐づくTLも除去
      state.favsList = state.favsList.filter((fav) => fav.group !== action.payload)
      // 選択されているグループをデフォルト値に変更
      state.selectedGroup = ''
    },
    changeSelectedGroup: (state, action: PayloadAction<string>) => {
      state.selectedGroup = action.payload
    },
  },
})

export const { addFav, removeFav, loadFavs, addGroup, removeGroup, changeSelectedGroup } =
  slice.actions

export const selectFavsAndGroupData = (state: AppState): FavsState => state.favs
export const selectFavs = (state: AppState): FavState[] => state.favs.favsList

export const selectExistTLInFavs = (state: AppState): boolean =>
  state.favs.favsList.filter((fav) => fav.tl.tlId === state.tl.tlId).length !== 0

export const selectExistFavByTLIdAndGroupName =
  (tlId: string, groupName: string) =>
  (state: AppState): boolean =>
    state.favs.favsList.filter((fav) => tlId === fav.tl.tlId && groupName === fav.group).length !==
    0

export const selectFavsByGroupName =
  (targetGroup: string) =>
  (state: AppState): TLState[] =>
    state.favs.favsList.filter((fav) => fav.group === targetGroup).map((fav) => fav.tl)

export const selectSelectedGroup = (state: AppState): string => state.favs.selectedGroup
export const selectGroupList = (state: AppState): string[] => state.favs.groupList
export const selectFavsInSelectedGroup = (state: AppState): FavState[] =>
  state.favs.favsList.filter((fav) => fav.group === state.favs.selectedGroup)
export default slice.reducer
