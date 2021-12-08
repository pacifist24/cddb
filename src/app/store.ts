import { configureStore } from '@reduxjs/toolkit'

import mainReducer from 'ducks/main'
import tlReducer from 'ducks/tl'
import commonAlertReducer from 'ducks/commonAlert'
import styleRedicer from 'ducks/style'

const makeStore = () =>
  configureStore({
    reducer: {
      main: mainReducer,
      tl: tlReducer,
      commonAlert: commonAlertReducer,
      style: styleRedicer,
    },
  })

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
