import React from 'react'

export default function CategoriesIndex(props) {
  return (
    <div>
    <h3>Categories List:</h3>
    {props.categories.map((category) => (
      <p>{category.name}</p>
    ))}
  </div>
  )
}
