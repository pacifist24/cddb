import { configureStore } from '@reduxjs/toolkit'

import mainReducer from 'ducks/main'
import tlReducer from 'ducks/tl'
import commonAlertReducer from 'ducks/commonAlert'

const makeStore = () =>
  configureStore({
    reducer: {
      main: mainReducer,
      tl: tlReducer,
      commonAlert: commonAlertReducer,
    },
  })

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
