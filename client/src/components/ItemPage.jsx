
import React, { Component } from 'react';
import EditItem from './EditItem'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class ItemsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { item } = this.props;
    // console.log(this.props);
    return (
      <div className="item-page">
        {item === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <img alt={item.name} src={item.img_link} />
            {this.state.isEdit ?
              <Route path={'/items/:id/edit'} render={() => (
                <EditItem
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editItem(this.props.itemForm.id);
                    this.setState({ isEdit: false })
                    this.props.history.push(`/items/${this.props.itemForm.id}`)
                  }}
                  itemForm={this.props.itemForm} />
              )} />
              :
              <>
                <h1>{item.name}</h1>
                <br />
                <p>{item.description}</p>
                <p>Qty: {item.quantity}</p>
                <br />
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/items/${item.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteItem(item.id);
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(ItemsPage);
