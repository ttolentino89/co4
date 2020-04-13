import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// I wanted to show a different style of doing forms in this component
// I used terinaries to show in-line edit forms in place the mapped item item.
// Additionally there is another terinary for the add item item form. In a more complicated app, we would probably make this a seperate component.
class ShowItem extends Component {
  constructor(props) {
    super(props);
    // We set two boolean values in state to check if the forms should be shown
    this.state = {
      isAdd: false,
      isEdit: false
    }
  }
  render() {
    return (
      <div>
        {this.props.items.map(item => (
          <div key={item.id}>
            {/* Here is where we user a terinary for the edit form.
              If the isEdit in state is set to the current item id, then we show an edit form for just that item */}
            {this.state.isEdit === item.id
              ?
              <div>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.updateItem(item);
                  this.setState({
                    isEdit: false
                  });
                }}>
                  <input
                    name="name"
                    type="text"
                    value={this.props.formData.name}
                    onChange={this.props.handleChange} />
                    <input
                      name="description"
                      type="text"
                      value={this.props.formData.description}
                      onChange={this.props.handleChange} />
                    <input
                      name="img_link"
                      type="text"
                      value={this.props.formData.img_link}
                      onChange={this.props.handleChange} />
                    <input
                      name="quantity"
                      type="number"
                      value={this.props.formData.quantity}
                      onChange={this.props.handleChange} />
                  <button>Submit</button>
                </form>
              </div>
              :
              // When the isEdit does not equal the current item id, display the item info like normal
              // This inludes the item name inside a link, and edit button and delete button
              <div>
                <Link to={`/item/${item.id}`} onClick={() => { this.props.getClickedItem(item.id) }}>{item.name}</Link>
                <button onClick={() => {
                  // the edit form data is preset using the setitemForm function and the current items data
                  this.props.setItemForm(item);
                  // then we set isEdit in state to the current items id
                  this.setState({
                    isEdit: item.id
                  })
                }}>edit</button>
                <button onClick={() => { this.props.deleteItem(item) }}>delete</button>
              </div>
            }
          </div>
        ))}
        {/* incase you haven't seen it, <hr /> just makes an horizontle rule (or line) accross the page */}
        <hr />
        {this.state.isAdd // Same setup as before but since there will only ever be one add form, a simple true/false boolean will work
          ?
          // When the 'Add' button is clicked, a create item form is shown.
          // When the 'Submit' button is clicked, when ship the data to our API and reset the form back to a button
          <div>
            <form onSubmit={(e) => {
              e.preventDefault();
              this.props.handleSubmit();
              this.setState({ isAdd: false })
            }}>
              <input
                name="name"
                type="text"
                value={this.props.formData.name}
                onChange={this.props.handleChange} />
                <input
                  name="description"
                  type="text"
                  value={this.props.formData.description}
                  onChange={this.props.handleChange} />
                <input
                  name="img_link"
                  type="text"
                  value={this.props.formData.img_link}
                  onChange={this.props.handleChange} />
                <input
                  name="quantity"
                  type="number"
                  value={this.props.formData.quantity}
                  onChange={this.props.handleChange} />
              <button>submit</button>
            </form>
          </div>
          :
          <button onClick={() => {
            this.setState({ isAdd: true })
          }}>Add</button>
        }
      </div>
    )
  }
}

export default ShowItem;
