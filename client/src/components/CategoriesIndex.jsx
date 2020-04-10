import React from 'react';

// Simple functional component to show categories
const CategoriesIndex = (props) => {
return (
  <div>
    {props.categories.map(category => (
      <div key={category.id}>
        <p>{category.name}</p>
      </div>
    ))}
  </div>
)
}

export default CategoriesIndex;
