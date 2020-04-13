import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import ItemsView from './components/ItemsView';
import ItemPage from './components/ItemPage';
import CreateItem from './components/CreateItem'
import Login from './components/Login'
import Register from './components/Register'

import {
  createItem,
  readAllItems,
  updateItem,
  destroyItem,
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/api-helper'

import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      categories: [],
      items: [],
      itemForm: {
        name: '',
        description: '',
        img_link: '',
        quantity: ''
      },
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
      this.getItems();
    }
  }

  getItems = async () => {
    const items = await readAllItems();
    this.setState({
      items
    })
  }

  newItem = async (e) => {
    e.preventDefault();
    const item = await createItem(this.state.itemForm);
    this.setState(prevState => ({
      items: [...prevState.items, item],
      itemForm: {
        name: '',
        description: '',
        img_link: '',
        quantity: ''
      }
    }))
  }

  editItem = async (item) => {
    const { itemForm } = this.state
    const updatedItem = await updateItem(itemForm.id, itemForm);
    this.setState(prevState => (
      {
        items: prevState.items.map(item => {
          return item.id === itemForm.id ? updatedItem : item
        }),
      }
    ))
  }

  deleteItem = async (id) => {
    await destroyItem(id);
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }))
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      itemForm: {
        ...prevState.itemForm,
        [name]: value,
      }
    }))
  }

  mountEditForm = async (id) => {
    const items = await readAllItems();
    const item = items.find(el => el.id === parseInt(id));
    this.setState({
      itemForm: item
    });
  }

  resetForm = () => {
    this.setState({
      itemForm: {
        name: '',
        description: '',
        img_link: '',
        quantity: ''
      }
    })
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    removeToken();
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App" >
        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route
          exact path="/items"
          render={() => (
            <ItemsView
              currentUser={this.state.currentUser}
              items={this.state.items}
              itemForm={this.state.itemForm}
              handleFormChange={this.handleFormChange}
              newItem={this.newItem} />
          )}
        />
        <Route
          path="/new/item"
          render={() => (
            <CreateItem
              handleFormChange={this.handleFormChange}
              itemForm={this.state.itemForm}
              newItem={this.newItem} />
          )} />
        <Route
          path="/items/:id"
          render={(props) => {
            const {id} = props.match.params;
            const item = this.state.items.find(el => el.id === parseInt(id));
            return <ItemPage
              id={id}
              item={item}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editItem={this.editItem}
              itemForm={this.state.itemForm}
              deleteItem={this.deleteItem} />
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);
