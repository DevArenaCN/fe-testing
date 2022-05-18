import React from 'react';
import { connect } from 'react-redux';
import { setResults, clearResult } from '../store/searchResult';
import '../styles/Search.css'

class SearchScreen extends React.Component {
  constructor() {
    super();
    
  }
  render() {
    return(
      <div className={"main-container"}>Search</div>
    )
  }
}

const mapStateToPros = state => ({
  results: state.results,
  currentPage: state.currentPage,
  totalPages: state.totalPages,
  totalCount: state.totalCount,
})

const mapDispatchToProps = { setResults, clearResult };

export default connect(mapStateToPros, mapDispatchToProps)(SearchScreen);