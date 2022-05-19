import React from 'react'
import '../../styles/items/ResultItem.css'

export function ProductItem(props) {
  return (
    <div className={"result-item-main-container"}>
      {props.item.image ? <img src={props.item.image} alt={props.item.name} /> : <div className={"image-placeholder"} />}
      <div className={"result-item-info-container"}>
        <span>{props.item.previewText}</span>
        <span>{props.item.name}</span>
        <span>{props.item.productCategory}</span>
      </div>
    </div>
  );
}