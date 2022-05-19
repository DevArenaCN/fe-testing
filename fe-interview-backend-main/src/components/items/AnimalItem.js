import React from 'react'
import PropTypes from 'prop-types'

import '../../styles/items/ResultItem.css'

function AnimalItem(props) {
  return (
    <div className={"result-item-main-container"}>
      {props.item.image ? <img src={props.item.image} alt={props.item.name} /> : <div className={"image-placeholder"} />}
      <div className={"result-item-info-container"}>
        <span>Name: {props.item.name}</span>
        <span>Scientific Name: {props.item.taxonomy.scientificName}</span>
      </div>
    </div>
  );
}

AnimalItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    taxonomy: PropTypes.shape({
      scientificName: PropTypes.string,
    }),
    image: PropTypes.string,
  })
}

export default AnimalItem