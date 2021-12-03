import { configureStore } from '@reduxjs/toolkit'

import mainReducer from 'ducks/main'

const makeStore = () =>
  configureStore({
    reducer: {
      main: mainReducer,
    },
  })

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
