import React from 'react';
import { connect } from 'react-redux';
import { TextField } from '@mui/material';
import debounce from 'lodash.debounce';

import { ResultList } from "../components/ResultList";
import { setResults, clearResult, setStarredItems, updateAfterStar } from '../store/searchResult';
import '../styles/Search.css'
import { search, getAllStars } from '../api';

class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestInFlight: false,
      errMsg: null,
    }
  }

  componentDidMount() {
    this.handleSearchInput = debounce(this.handleSearchInput, 500);
    this.handleGetStarredItems();
  }

  handleSearchInput(event) {
    if (event.target.value) {
      this.handleSearch(event.target.value);
    } else {
      this.props.clearResult();
    }
  }

  handleSearch(val) {
    this.setState({
      requestInFlight: true,
      errMsg: null,
    })
    search(val).then((response) => {
      this.setState({
        requestInFlight: false,
      })
      this.props.setResults(response.data);
    }).catch(err => {
      this.setState({
        errMsg: err.message,
      })
    })
  }

  handleGetStarredItems() {
    this.setState({
      errMsg: null,
    })
    getAllStars().then((response) => {
      this.props.setStarredItems(response.data);
    }).catch(err => {
      this.setState({
        errMsg: err.message,
      })
    })
  }

  render() {
    return(
      <div className={"main-container"}>
        <h1>Search</h1>
        <span>{ this.state.errMsg }</span>
        <span>{ this.props.starred ? this.props.starred.length : null }</span>
        <TextField
          id="search"
          label="Search"
          variant="standard"
          onChange={(e) => this.handleSearchInput(e)}
        />
        <div>
          { this.props.results ? <ResultList items={this.props.results} getStarred={() => this.handleGetStarredItems() }/> : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.searchResult.results,
  currentPage: state.searchResult.currentPage,
  totalPages: state.searchResult.totalPages,
  totalCount: state.searchResult.totalCount,
  starred: state.searchResult.starredItems,
})

const mapDispatchToProps = (dispatch) => ({
  setResults: (results) => dispatch(setResults(results)),
  clearResult: () => dispatch(clearResult()),
  setStarredItems: (results) => dispatch(setStarredItems(results)),

});

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);