import { configureStore } from '@reduxjs/toolkit'
import searchResultReducer from './searchResult'

export default configureStore({
  reducer: {
    searchResult: searchResultReducer
  }
})