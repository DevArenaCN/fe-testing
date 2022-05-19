import React from 'react'
import ResultItem from './ResultItem'

export function ResultList(props) {
  const listItems = props.items.map((item) =>
    <li key={item.id}>
      <ResultItem item={item} getStarred={props.getStarred}/>
    </li>
  );
  return (
    <ul>
      { listItems }
    </ul>
  )
}