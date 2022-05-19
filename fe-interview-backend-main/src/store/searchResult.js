import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  results: null,
  starredItems: null,
  currentPage: null,
  totalPages: null,
  totalCount: null,
}

export const searchResult = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    setResults: (state, action) => {
      state.results = action.payload;
    },
    clearResult: state => {
     state.results = null;
    },
    appendResults: (state, action) => {
      const { results, currentPage, totalPages, totalCount } = action.payload;
      state.results = state.results.append(results);
      state.currentPage = currentPage;
      state.totalPages = totalPages;
      state.totalCount = totalCount;
    },
    setStarredItems: (state, action) => {
      state.starredItems = action.payload;
    },
    updateAfterStar: (state, action) => {
      const item = action.payload;
      const index = state.results.findIndex((val) => val.id === item.id);
      state.results[index].starred = item.starred;
    }
  }
})

export const { setResults, clearResult, appendResults, setStarredItems, updateAfterStar } = searchResult.actions

export const selectResults = state => state.results;
export const selectCurrentPage = state => state.currentPage;
export const selectTotalPages = state => state.totalPages;
export const totalCount = state => state.totalCount;
export const starredItems = state => state.starredItems;

export default searchResult.reducer