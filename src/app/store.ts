import { configureStore } from '@reduxjs/toolkit'

import mainReducer from 'ducks/main'
import tlReducer from 'ducks/tl'
import styleReducer from 'ducks/style'
import favsReducer from 'ducks/favs'
import searchReducer from 'ducks/search'

const makeStore = () =>
  configureStore({
    reducer: {
      main: mainReducer,
      tl: tlReducer,
      favs: favsReducer,
      style: styleReducer,
      search: searchReducer,
    },
  })

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
