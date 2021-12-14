import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from 'app/store'
import { TLState } from 'ducks/tl'
import { FULL_BATTLE_TIME } from 'lib/gameConstants'

export type DBTLDataType = {
  tl: TLState
  fav: number
  userName: string
  userId: string
  userPhotoURL: string
}

export type SortType = 'like' | 'damage' | 'updateDate'

export type SearchState = {
  searchResults: DBTLDataType[]
  sortKey: SortType
  bossNameConditon: string
  updateDateLimit: number
  likeNumCondition: number
  damageCondition: number
  allowFullAuto: boolean
  allowSemiAuto: boolean
  allowDifficultManual: boolean
  allowMidManual: boolean
  allowEasyManual: boolean
  timeRequiredLower: number
  timeRequiredUpper: number
}

const initialState: SearchState = {
  searchResults: [],
  sortKey: 'like',
  bossNameConditon: '',
  likeNumCondition: 0,
  damageCondition: 0,
  allowFullAuto: true,
  allowSemiAuto: true,
  allowDifficultManual: true,
  allowMidManual: true,
  allowEasyManual: true,
  timeRequiredLower: 0,
  timeRequiredUpper: FULL_BATTLE_TIME,
  updateDateLimit: 0,
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
    changeSortKey: (state, action: PayloadAction<SortType>) => {
      state.sortKey = action.payload
    },
    changeBossNameConditon: (state, action: PayloadAction<string>) => {
      state.bossNameConditon = action.payload
    },
    changeLikeNumCondition: (state, action: PayloadAction<number>) => {
      state.likeNumCondition = action.payload
    },
    changeDamageCondition: (state, action: PayloadAction<number>) => {
      state.damageCondition = action.payload
    },
    toggleAllowFullAuto: (state) => {
      state.allowFullAuto = !state.allowFullAuto
    },
    toggleAllowSemiAuto: (state) => {
      state.allowSemiAuto = !state.allowSemiAuto
    },
    toggleAllowDifficultManual: (state) => {
      state.allowDifficultManual = !state.allowDifficultManual
    },
    toggleAllowMidManual: (state) => {
      state.allowMidManual = !state.allowMidManual
    },
    toggleAllowEasyManual: (state) => {
      state.allowEasyManual = !state.allowEasyManual
    },
    changeTimeRequiredLower: (state, action: PayloadAction<number>) => {
      state.timeRequiredLower = action.payload
    },
    changeTimeRequiredUpper: (state, action: PayloadAction<number>) => {
      state.timeRequiredUpper = action.payload
    },
    changeUpdateDateLimit: (state, action: PayloadAction<number>) => {
      state.updateDateLimit = action.payload
    },
  },
})

const filters = (conditions: SearchState) => [
  (d: DBTLDataType) =>
    conditions.bossNameConditon === '' || d.tl.bossName === conditions.bossNameConditon,
  (d: DBTLDataType) => d.fav >= conditions.likeNumCondition,
  (d: DBTLDataType) =>
    conditions.updateDateLimit === 0 ||
    Date.now() - d.tl.updateDateUTC <= conditions.updateDateLimit,
  (d: DBTLDataType) => d.tl.damage >= conditions.damageCondition,
  (d: DBTLDataType) =>
    (d.tl.operation === 'fullAuto' && conditions.allowFullAuto) ||
    (d.tl.operation === 'semiAuto' && conditions.allowSemiAuto) ||
    (d.tl.operation === 'manual' &&
      d.tl.difficulty === 'high' &&
      conditions.allowDifficultManual) ||
    (d.tl.operation === 'manual' && d.tl.difficulty === 'mid' && conditions.allowMidManual) ||
    (d.tl.operation === 'manual' && d.tl.difficulty === 'low' && conditions.allowEasyManual),
  (d: DBTLDataType) =>
    d.tl.startTime - d.tl.endTime >= conditions.timeRequiredLower &&
    d.tl.startTime - d.tl.endTime <= conditions.timeRequiredUpper,
]

export const {
  setSearchResults,
  removeSearchResult,
  doFav,
  changeSortKey,
  changeBossNameConditon,
  changeLikeNumCondition,
  changeDamageCondition,
  toggleAllowFullAuto,
  toggleAllowSemiAuto,
  toggleAllowDifficultManual,
  toggleAllowMidManual,
  toggleAllowEasyManual,
  changeTimeRequiredLower,
  changeTimeRequiredUpper,
  changeUpdateDateLimit,
} = slice.actions
export const selectSearchResults = (state: AppState): DBTLDataType[] => {
  let results = [...state.search.searchResults]

  results = results.filter((result) =>
    filters(state.search).reduce((currentValue, filter) => currentValue && filter(result), true),
  )

  switch (state.search.sortKey) {
    case 'like':
      return results.sort((a, b) => b.fav - a.fav)
    case 'damage':
      return results.sort((a, b) => b.tl.damage - a.tl.damage)
    default:
      return results.sort((a, b) => b.tl.updateDateUTC - a.tl.updateDateUTC)
  }
}
export const selectSortKey = (state: AppState): SortType => state.search.sortKey
export const selectBossNameCondition = (state: AppState): string => state.search.bossNameConditon
export const selectUpdateDateLimit = (state: AppState): number => state.search.updateDateLimit
export const selectLikeNumCondition = (state: AppState): number => state.search.likeNumCondition
export const selectDamageCondition = (state: AppState): number => state.search.damageCondition
export const selectAllowFullAuto = (state: AppState): boolean => state.search.allowFullAuto
export const selectAllowSemiAuto = (state: AppState): boolean => state.search.allowSemiAuto
export const selectAllowDifficultManual = (state: AppState): boolean =>
  state.search.allowDifficultManual
export const selectAllowMidManual = (state: AppState): boolean => state.search.allowMidManual
export const selectAllowEasyManual = (state: AppState): boolean => state.search.allowEasyManual
export const selectTimeRequiredLower = (state: AppState): number => state.search.timeRequiredLower
export const selectTimeRequiredUpper = (state: AppState): number => state.search.timeRequiredUpper

export default slice.reducer