import React from 'react';

// Simple functional component to show categories
const CategoriesIndex = (props) => {
return (
  <div className="categories-container">
    {props.categories.map(category => (
      <div key={category.id}>
        <h1>{category.name}</h1>
      </div>
    ))}
  </div>
)
}

export default CategoriesIndex;
