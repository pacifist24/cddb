import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MAX_PHASE } from 'lib/gameConstants'
import type { AppState } from 'app/store'

export type Character = {
  name: string
  star: number
  lv: number
  rank: number
  specialLv: number
  comment: string
}

export type UB = {
  id: number
  time: number
  name: string
  comment: string
}

export type TLState = {
  phase: number
  damage: number
  bossName: string
  startTime: number
  endTime: number
  characters: Character[]
  timeline: UB[]
  comment: string
}

const initialState: TLState = {
  phase: MAX_PHASE,
  damage: 0,
  bossName: '',
  startTime: 90,
  endTime: 0,
  characters: [],
  timeline: [],
  comment: '',
}

export const slice = createSlice({
  name: 'tl',
  initialState,
  reducers: {
    changePhase: (state, action: PayloadAction<number>) => {
      state.phase = action.payload
    },
    changeDamage: (state, action: PayloadAction<number>) => {
      state.damage = action.payload
    },
    changeBossName: (state, action: PayloadAction<string>) => {
      state.bossName = action.payload
    },
    changeStartTime: (state, action: PayloadAction<number>) => {
      state.startTime = action.payload
    },
    changeEndTime: (state, action: PayloadAction<number>) => {
      state.endTime = action.payload
    },
    changeComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload
    },
    selectCharacters: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload
    },
    changeCharacterName: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.characters[action.payload.index].name = action.payload.value
    },
    changeCharacterStar: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.characters[action.payload.index].star = action.payload.value
    },
    changeCharacterLv: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.characters[action.payload.index].lv = action.payload.value
    },
    changeCharacterRank: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.characters[action.payload.index].rank = action.payload.value
    },
    changeCharacterSpecialLv: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.characters[action.payload.index].specialLv = action.payload.value
    },
    changeCharacterComment: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.characters[action.payload.index].comment = action.payload.value
    },
    changeUBTime: (state, action: PayloadAction<{ index: number; value: number }>) => {
      state.timeline[action.payload.index].time = action.payload.value
    },
    changeUBName: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.timeline[action.payload.index].name = action.payload.value
    },
    changeUBComment: (state, action: PayloadAction<{ index: number; value: string }>) => {
      state.timeline[action.payload.index].comment = action.payload.value
    },
    addUB: (state, action: PayloadAction<{ index: number; ub: UB }>) => {
      state.timeline.splice(action.payload.index, 0, action.payload.ub)
    },
    deleteUB: (state, action: PayloadAction<number>) => {
      state.timeline.splice(action.payload, 1)
    },
    sanitizeUB: (state) => {
      state.timeline = state.timeline.filter(
        (ub) =>
          ub.name === state.bossName ||
          state.characters.map((character) => character.name).includes(ub.name),
      )
    },
    loadTL: (state, action: PayloadAction<TLState>) => {
      state.bossName = action.payload.bossName
      state.characters = action.payload.characters
      state.comment = action.payload.comment
      state.damage = action.payload.damage
      state.endTime = action.payload.endTime
      state.timeline = action.payload.timeline
      state.phase = action.payload.phase
      state.startTime = action.payload.startTime
      state.endTime = action.payload.endTime
    },
  },
})

export const {
  changePhase,
  changeDamage,
  changeBossName,
  changeStartTime,
  changeEndTime,
  changeComment,
  changeCharacterName,
  changeCharacterStar,
  changeCharacterLv,
  changeCharacterRank,
  changeCharacterSpecialLv,
  changeCharacterComment,
  changeUBTime,
  changeUBName,
  changeUBComment,
  addUB,
  deleteUB,
  selectCharacters,
  sanitizeUB,
  loadTL,
} = slice.actions

export const selectTL = (state: AppState): TLState => state.tl
export const selectIsCharactersSelected = (state: AppState): boolean =>
  state.tl.characters.length === 5
export const selectIsTLBasicDataInputVisible = (state: AppState): boolean =>
  state.tl.characters.length === 5
export const selectIsUBsInputVisible = (state: AppState): boolean =>
  state.tl.bossName !== '' && state.tl.characters.length === 5
export default slice.reducer
