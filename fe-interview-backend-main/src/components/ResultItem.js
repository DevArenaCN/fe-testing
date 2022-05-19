import React from "react";
import { connect } from 'react-redux';
import { CircularProgress, Button } from '@mui/material';

import { ProductItem } from './items/ProductItem';
import { CompanyItem } from './items/CompanyItem';
import AnimalItem from './items/AnimalItem';

import { updateAfterStar } from '../store/searchResult';

import { getAllStars, starAction } from '../api';

import '../styles/items/ResultItem.css'



class ResultItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiRequestInFlight: false,
    }
  }

  handleStarAction() {
    let newItem = {
      ...this.props.item,
      starred: !this.props.item.starred
    };

    starAction(newItem.id, newItem).then((response) => {
      this.props.getStarred();
      this.props.updateAfterStar(response.data)
    })
  }

  renderItemByType(item) {
    switch(item.type) {
      case 'product':
        return <ProductItem item={item} />
      case 'company':
        return <CompanyItem item={item} />
      case 'animal':
        return <AnimalItem item={item}  />
      default:
        return null;
    }
  }

  render() {
    if (this.state.apiRequestInFlight) {
      return (<CircularProgress />)
    } else {
      return (
        <div className={"result-item"}>
          {this.renderItemByType(this.props.item)}
          <Button variant={this.props.item.starred ? "contained" : "outlined"} onClick={() => this.handleStarAction()}>
            {this.props.item.starred ? 'Unstart' : 'Star'}
          </Button>
        </div>

      )
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateAfterStar: (item) => dispatch(updateAfterStar(item))
})

export default connect(null, mapDispatchToProps)(ResultItem);