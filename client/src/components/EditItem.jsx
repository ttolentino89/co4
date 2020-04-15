import React from 'react';
import { withRouter } from 'react-router-dom';

function EditItem(props) {
  console.log(props)
  return (
    <div className= "edit-form">
      <h1>Editing: {props.itemForm.name}</h1>
      <form onSubmit={props.handleSubmit}>
        <p>Image Link:</p>
        &nbsp;
        <input
          type="text"
          name="img_link"
          value={props.itemForm.img_link}
          onChange={props.handleFormChange} />

        <p>Name:</p>
        <input
          type="text"
          name="name"
          value={props.itemForm.name}
          onChange={props.handleFormChange} />

        <p>Description:</p>
        <input
          type="text"
          name="description"
          value={props.itemForm.description}
          onChange={props.handleFormChange} />

          <p>Quantity:</p>
          <input
            type="text"
            name="quantity"
            value={props.itemForm.quantity}
            onChange={props.handleFormChange} />

          <br /><br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditItem);
