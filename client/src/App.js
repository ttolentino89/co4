import React, {Component} from 'react';
import {Route} from 'react-router;'
import './App.css';
import {readAllItems, readAllCategories} from './services/api-helper';

class App extends Component {
  state = {
    items: [],
    categories: [],
  }

async componentDidMount() {
    const items = await readAllItems();
    const categories = await readAllCategories();
    this.setState({
      items,
      categories,
    }
  )
}

  render() {
    return (
      <div className="App">
      <h1>Welcome to the Corona Covid Community Coalition</h1>
      <Route path='/items' render={() => (
        <ItemsIndex
          items = {this.state.items}
        />
      )} />
      <Route path='/categories' render={() => (
        <CategoriesIndex
          categories= {this.state.categories}
        />
      )} />
      </div>
    );
  }
}

export default App;
