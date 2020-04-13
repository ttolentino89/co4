import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateItem(props) {
  return (
    <div className="create-form">
      <h3>Create a new item:</h3>
      <form onSubmit={props.handleSubmit}>
        <p>Image Link:</p>
        <input
          type="text"
          name="photo"
          value={props.itemForm.img_link}
          onChange={props.handleFormChange} />

        <p>Item name:</p>
        <input
          type="text"
          name="name"
          value={props.itemForm.name}
          onChange={props.handleFormChange} />

        <p>Item Description:</p>
        <input
          type="text"
          name="description"
          value={props.itemForm.description}
          onChange={props.handleFormChange} />

        <p>Item Quantity:</p>
        <input
          type="number"
          name="qty"
          value={props.itemForm.quantity}
          onChange={props.handleFormChange} />
          <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(CreateItem);
