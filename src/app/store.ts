import { configureStore } from '@reduxjs/toolkit'

import mainReducer from 'ducks/main'
import tlReducer from 'ducks/tl'
import commonAlertReducer from 'ducks/commonAlert'
import styleReducer from 'ducks/style'
import favsReducer from 'ducks/favs'

const makeStore = () =>
  configureStore({
    reducer: {
      main: mainReducer,
      tl: tlReducer,
      commonAlert: commonAlertReducer,
      favs: favsReducer,
      style: styleReducer,
    },
  })

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
