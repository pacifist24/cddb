import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TLState } from 'ducks/tl'
import type { AppState } from 'app/store'

export type RouteState = {
  attack1: string
  attack2: string
  attack3: string
  rest1: string
  rest2: string
  rest3: string
}

export type RoutesState = {
  tlDic: { [tlId: string]: TLState }
  routes: RouteState[]
  calculatedConditions: {
    // 表示用に計算時の条件を持っておく
    groupName: string
    attackNum: number
    doesCalcRest: boolean
    excludedCharacters: string[]
    bossNameMustContains: string
  }
  groupName: string // 凸ルートを計算するTL保管のグループ
  attackNum: number // 何凸分のルートを計算するか
  doesCalcRest: boolean // 持ち越しルートも計算するか
  excludedCharacters: string[] // 検索対象から外すキャラ
  bossNameMustContains: string // 凸ルートに含めなくてはいけないボス
}

const initialState: RoutesState = {
  tlDic: {},
  routes: [],
  calculatedConditions: {
    groupName: '',
    attackNum: 3,
    doesCalcRest: false,
    excludedCharacters: [],
    bossNameMustContains: '',
  },
  groupName: '',
  attackNum: 3,
  doesCalcRest: false,
  excludedCharacters: [],
  bossNameMustContains: '',
}

export const slice = createSlice({
  name: 'routes',
  initialState,
  reducers: {
    setTLDic: (state, action: PayloadAction<{ [tlId: string]: TLState }>) => {
      state.tlDic = action.payload
    },
    setRoutes: (state, action: PayloadAction<RouteState[]>) => {
      state.routes = action.payload
    },
    changeGroupName: (state, action: PayloadAction<string>) => {
      state.groupName = action.payload
    },
    setCalcResult: (
      state,
      action: PayloadAction<{ routes: RouteState[]; tlDic: { [tlId: string]: TLState } }>,
    ) => {
      state.calculatedConditions = {
        groupName: state.groupName,
        attackNum: state.attackNum,
        doesCalcRest: state.doesCalcRest,
        excludedCharacters: state.excludedCharacters,
        bossNameMustContains: state.bossNameMustContains,
      }
      state.routes = action.payload.routes
      state.tlDic = action.payload.tlDic
    },
    changeAttackNum: (state, action: PayloadAction<number>) => {
      state.attackNum = action.payload
    },
    toggleDoesCalcRest: (state) => {
      state.doesCalcRest = !state.doesCalcRest
    },
    toggleExcludedCharacter: (state, action: PayloadAction<string>) => {
      if (state.excludedCharacters.includes(action.payload)) {
        state.excludedCharacters = state.excludedCharacters.filter(
          (character) => character !== action.payload,
        )
      } else {
        state.excludedCharacters.push(action.payload)
      }
    },
    changeBossNameMustContains: (state, action: PayloadAction<string>) => {
      state.bossNameMustContains = action.payload
    },
  },
})

export const {
  setTLDic,
  setRoutes,
  setCalcResult,
  changeGroupName,
  changeAttackNum,
  toggleDoesCalcRest,
  toggleExcludedCharacter,
  changeBossNameMustContains,
} = slice.actions
export const selectRoutes = (state: AppState): RouteState[] => state.routes.routes
export const selectTLDic = (state: AppState): { [tlId: string]: TLState } => state.routes.tlDic
export const selectGroupName = (state: AppState): string => state.routes.groupName
export const selectAttackNum = (state: AppState): number => state.routes.attackNum
export const selectDoesCalcRest = (state: AppState): boolean => state.routes.doesCalcRest
export const selectExcludedCharacters = (state: AppState): string[] =>
  state.routes.excludedCharacters
export const selectCalculatedAttackNumConditions = (state: AppState): number =>
  state.routes.calculatedConditions.attackNum
export const selectCalculatedDoesCalcRestConditions = (state: AppState): boolean =>
  state.routes.calculatedConditions.doesCalcRest
export const selectBossNameMustContains = (state: AppState): string =>
  state.routes.bossNameMustContains
export default slice.reducer
