import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  results: null,
  currentPage: null,
  totalPages: null,
  totalCount: null,
}

export const searchResult = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    setResults: (state, action) => {
      const [ results, currentPage, totalPages, totalCount ] = action.payload;
      state.results = results;
      state.currentPage = currentPage;
      state.totalPages = totalPages;
      state.totalCount = totalCount;
    },
    clearResult: state => {
      state = initialState;
    },
    appendResults: (state, action) => {
      const [ results, currentPage, totalPages, totalCount ] = action.payload;
      state.results = state.results.append(results);
      state.currentPage = currentPage;
      state.totalPages = totalPages;
      state.totalCount = totalCount;
    }
  }
})

export const { setResults, clearResult, appendResults } = searchResult.actions

export const selectResults = state => state.results;
export const selectCurrentPage = state => state.currentPage;
export const selectTotalPages = state => state.totalPages;
export const totalCount = state => state.totalCount;

export default searchResult.reducer