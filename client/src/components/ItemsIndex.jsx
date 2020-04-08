import React from 'react'

export default function ItemsIndex(props) {
  return (
    <div>
      <h3>Items List:</h3>
      {props.items.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  )
}
