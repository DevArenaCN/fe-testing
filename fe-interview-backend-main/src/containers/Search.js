import React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@mui/material';
import debounce from 'lodash.debounce';

import { setResults, clearResult } from '../store/searchResult';
import '../styles/Search.css'
import { search } from '../api';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestInFlight: false,
    }
  }

  componentDidMount() {
    this.handleSearchInput = debounce(this.handleSearchInput, 500);
  }

  handleSearchInput(event) {
    if (event.target.value) {
      this.handleSearch(event.target.value);
    }
  }

  handleSearch(val) {
    this.setState({
      requestInFlight: true,
    })
    search(val).then((response) => {
      this.setState({
        requestInFlight: false,
      })
      this.props.setResults(response.data);
    }).catch(err => {
      console.log(err);
    })
  }

  handleKeyDown(event) {
    if (event.key === 'Backspace') {
      this.props.clearResult();
    }
  }

  render() {
    return(
      <div className={"main-container"}>
        <h1>Search</h1>
        <span>{ JSON.stringify(this.props.results) }</span>
        <TextField
          id="search"
          label="Search"
          variant="standard"
          onChange={(e) => this.handleSearchInput(e)}
          onKeyDown={(e) => this.handleKeyDown(e)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.searchResult.results,
  currentPage: state.searchResult.currentPage,
  totalPages: state.searchResult.totalPages,
  totalCount: state.searchResult.totalCount,
})

const mapDispatchToProps = (dispatch) => ({
  setResults: (results) => dispatch(setResults(results)),
  clearResult: () => dispatch(clearResult()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);