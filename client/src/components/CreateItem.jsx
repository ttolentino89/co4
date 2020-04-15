import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Popup from "reactjs-popup";

function CreateItem(props) {
  return (
    <div className="create-form">
      <h1>Create a new item:</h1>
      <form onSubmit={props.newItem}>
        <p>Image Link:</p>
        <input
          type="text"
          name="img_link"
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
            type="text"
            name="quantity"
            value={props.itemForm.quantity}
            onChange={props.handleFormChange} />

          <br /><br />
        <Popup trigger={<button>Submit</button>}position="right center">
        <Link to="/items"><div className="success">Item Created! Click here to go back.</div></Link>
        </Popup>
      </form>
    </div>
  )
}

export default withRouter(CreateItem);
