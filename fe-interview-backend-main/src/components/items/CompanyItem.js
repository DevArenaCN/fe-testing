import React from 'react';
import '../../styles/items/ResultItem.css'

export function CompanyItem(props) {
  function composeAddress(add) {
    return `${add.address1}, ${!add.address2 ? '' : (add.address2 + ', ')}${add.city}, ${add.state} ${add.postalCode}`
  }

  return (
    <div className={"result-item-info-container company-info"}>
      <span>{props.item.name}</span>
      <span>{props.item.description}</span>
      <span>{composeAddress(props.item.address)}</span>
    </div>
  )
}