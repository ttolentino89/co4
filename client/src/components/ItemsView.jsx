import React from 'react';
import { withRouter } from 'react-router';

function ItemsView(props) {
  return (
    <div className="item-container">
      {props.items.map(item => (
        <div
          key={item.id}
          className="item-card"
          onClick={(e) => {
            if (props.currentUser) {
              props.history.push(`/items/${item.id}`);
            } else {
              props.history.push(`/login`);
            }
            window.scrollTo(0, 0);
          }}>
          <img alt={item.name} src={item.img_link} />
          <h1>{item.name}</h1>
          <br />
        </div>
      ))}
      <div
        className="item-card"
        onClick={() => {
          props.history.push('/new/item');
          window.scrollTo(0, 0);
        }}>
        <img
          alt="Create a new item"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" />
        <h3>Create a new item</h3>
      </div>
    </div>
  )
}

export default withRouter(ItemsView)
