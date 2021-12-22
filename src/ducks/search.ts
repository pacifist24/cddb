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
  phaseCondition: number
  updateDateLimit: number
  likeNumCondition: number
  damageCondition: number
  allowFullAuto: boolean
  allowSemiAuto: boolean
  allowManual: boolean
  timeRequiredLower: number
  timeRequiredUpper: number
  excludedCharacters: string[]
}

const initialState: SearchState = {
  searchResults: [],
  sortKey: 'like',
  bossNameConditon: '',
  phaseCondition: 0,
  likeNumCondition: 0,
  damageCondition: 0,
  allowFullAuto: true,
  allowSemiAuto: true,
  allowManual: true,
  timeRequiredLower: 0,
  timeRequiredUpper: FULL_BATTLE_TIME,
  updateDateLimit: 0,
  excludedCharacters: [],
}

export const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action: PayloadAction<DBTLDataType[]>) => {
      state.searchResults = action.payload
    },
    removeSearchResult: (state, action: PayloadAction<string>) => {
      state.searchResults = state.searchResults.filter(
        (searchResult) => searchResult.tl.tlId !== action.payload,
      )
    },
    doGoodEval: (state, action: PayloadAction<string>) => {
      const target = {
        ...state.searchResults.filter((searchResult) => searchResult.tl.tlId === action.payload)[0],
      }
      state.searchResults = state.searchResults.filter(
        (searchResult) => searchResult.tl.tlId !== action.payload,
      )
      state.searchResults.push({ ...target, fav: target.fav + 1 })
    },
    undoGoodEval: (state, action: PayloadAction<string>) => {
      const target = {
        ...state.searchResults.filter((searchResult) => searchResult.tl.tlId === action.payload)[0],
      }
      state.searchResults = state.searchResults.filter(
        (searchResult) => searchResult.tl.tlId !== action.payload,
      )
      state.searchResults.push({ ...target, fav: target.fav - 1 })
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
    toggleAllowManual: (state) => {
      state.allowManual = !state.allowManual
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
    addExcludedCharacter: (state, action: PayloadAction<string>) => {
      state.excludedCharacters.push(action.payload)
    },
    removeExcludedCharacter: (state, action: PayloadAction<string>) => {
      state.excludedCharacters = state.excludedCharacters.filter(
        (character) => character !== action.payload,
      )
    },
    changePhaseCondition: (state, action: PayloadAction<number>) => {
      state.phaseCondition = action.payload
    },
  },
})

const filters = (conditions: SearchState) => [
  (d: DBTLDataType) =>
    conditions.bossNameConditon === '' || d.tl.bossName === conditions.bossNameConditon,
  (d: DBTLDataType) => conditions.phaseCondition === 0 || d.tl.phase === conditions.phaseCondition,
  (d: DBTLDataType) => d.fav >= conditions.likeNumCondition,
  (d: DBTLDataType) =>
    conditions.updateDateLimit === 0 ||
    Date.now() - d.tl.updateDateUTC <= conditions.updateDateLimit,
  (d: DBTLDataType) => d.tl.damage >= conditions.damageCondition,
  (d: DBTLDataType) =>
    (d.tl.operation === 'fullAuto' && conditions.allowFullAuto) ||
    (d.tl.operation === 'semiAuto' && conditions.allowSemiAuto) ||
    (d.tl.operation === 'manual' && conditions.allowManual),
  (d: DBTLDataType) =>
    d.tl.startTime - d.tl.endTime >= conditions.timeRequiredLower &&
    d.tl.startTime - d.tl.endTime <= conditions.timeRequiredUpper,
  (d: DBTLDataType) =>
    d.tl.characters.reduce(
      (currentValue, character) =>
        currentValue && !conditions.excludedCharacters.includes(character.name),
      true,
    ),
]

export const {
  setSearchResults,
  removeSearchResult,
  doGoodEval,
  undoGoodEval,
  changeSortKey,
  changeBossNameConditon,
  changeLikeNumCondition,
  changeDamageCondition,
  toggleAllowFullAuto,
  toggleAllowSemiAuto,
  toggleAllowManual,
  changeTimeRequiredLower,
  changeTimeRequiredUpper,
  changeUpdateDateLimit,
  addExcludedCharacter,
  removeExcludedCharacter,
  changePhaseCondition,
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
export const selectAllowManual = (state: AppState): boolean => state.search.allowManual
export const selectTimeRequiredLower = (state: AppState): number => state.search.timeRequiredLower
export const selectTimeRequiredUpper = (state: AppState): number => state.search.timeRequiredUpper
export const selectExcludedCharacters = (state: AppState): string[] =>
  state.search.excludedCharacters
export const selectPhaseCondition = (state: AppState): number => state.search.phaseCondition
export default slice.reducer
