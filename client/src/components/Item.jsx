import React, { Component } from 'react';

// Same terinary form idea as create and update foods. This time we use a select drop down menu to show our flavors
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdd: false
    }
  }

  render() {
    return (
      <div>
        {this.props.item &&
          <div>
            <h1>{this.props.item.name}</h1>
            {this.props.item.categories.map(category => (
              <div key={category.id}>
                <p>{category.name}</p>
              </div>
            ))}
            {this.state.isAdd
              ?
              <div>
                {/* The value and onChange function go on the select tag.
                    Then we map through our flavors as option tags within the select tag */}
                <select value={this.props.selectedCategory} onChange={this.props.handleChange}>
                  <option>Select a category:</option>
                  {this.props.categories.map(category=>(
                    <option>{category.name}</option>
                  ))}
                </select>
                <button onClick={() =>{
                  // addFlavorToFood takes the current food item and form data from app.js state to send to the API
                  this.props.addCategoryToItem(this.props.item)
                }}>Submit</button>
              </div>
              :
              <button onClick={() => {
                this.setState({
                  isAdd: true
                })
              }}>Add</button>
            }
          </div>
        }
      </div>
    )
  }
}

export default Item;
