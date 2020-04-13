import React from 'react';

// Simple functional component to show categories
const ShowCategories = (props) => {
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

export default ShowCategories;
