import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import Login from './components/Login'
import Register from './components/Register'
import ItemsIndex from './components/ItemsIndex'
import Item from './components/Item'
import CategoriesIndex from './components/CategoriesIndex'
//backend API calls from api-helper.js
import {
  loginUser,
  registerUser,
  readAllItems,
  readAllCategories,
  readItemByID,
  createItem,
  updateItem,
  destroyItem,
  addCategory,
  removeToken,
  verifyUser
} from './services/api-helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      categories: [],
      items: [],
      item: null,
      formData: {
        name: "",
        description: "",
        img_link: "",
        qty: ""
      },
      selectedCategory: '', // Form data for adding a flavor to a food
      authFormData: {
        email: "",
        password: ""
      }
    }
  }

  // onClick function to redirect to the login form
  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  // On page load, we grab all the foods and flavors
  // If so, we hit our verify route to get the user data.
  componentDidMount = () => {
    this.getItems()
    this.getCategories();
    this.handleVerify();
  }

  getItems = async () => {
    const items = await readAllItems();
    this.setState({ items });
  }

  getItemByID = async (id) => {
    const item = await readItemByID(id);
    this.setState({ item });
  }

  addItem = async () => {
    const newItem = await createItem(this.state.formData)
    this.setState(prevState => ({
      item: [...prevState.item, newItem],
      formData: {
        name: "",
        description: "",
        img_link: "",
        qty: ""
      }
    }))
  }

  updateItem = async (item) => {
    const updatedItem = await updateItem(this.state.formData, item.id);
    this.setState(prevState => ({
      item: prevState.item.map(singleItem => {
        return singleItem.id === item.id ? updatedItem : singleItem
      })
    }))
  }

  deleteItem = async (item) => {
    await destroyItem(item.id);
    this.setState(prevState => ({
      item: prevState.item.filter(singleItem => singleItem.id !== item.id)
    }))
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ formData: { [name]: value } });
  }

  setItemForm = (item) => {
    this.setState({
      formData: {
        name: item.name
      }
    })
  }

  // ====================================
  // ============= Categories ===========
  // ====================================

  getCategories = async () => {
    const categories = await readAllCategories();
    this.setState({ categories })
  }

  addCategoryToItem = async (item) => {
    const newCategory = this.state.categories.find(category => category.name === this.state.selectedCategory);
    const newItem = await addCategory(item.id, newCategory.id);
    this.setState({
      item: newItem
    })
  }


  categoryForm = (e) => {
    // debugger;
    this.setState({
      selectedCategory: e.target.value
    })
  }

  // ====================================
  // ============= Auth =================
  // ====================================

  // Function to login a user
  // we set the user data in state.
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  // Function to register a user
  // we set the user data in state.
  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser })
  }

  // =========================================================================================
  handleVerify = async () => {
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }
  // Function to logout user
  // We delete the token from local storage
  // set the current user in state back to null
  // and call our remove token function to remove
  // the auth headers from our api call
  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
    removeToken();
  }

  // Handle change function for the auth forms
  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  // ====================================
  // ============= Render ===============
  // ====================================

  render() {
    return (
      <div>
        <header>
          <Link to="/"><h1>Welcome to Co4</h1></Link>
          {/* Here we use a terinary to check if there is a logged in user set in state.
              If there is no logged in user, we show a login button instead of the site nav */}
          {this.state.currentUser
            ?
            <div>
              {/* This is a greeting to the user if there user info has been set in state.
              We use the guard operator to check '&&' */}
              <h3>Hi {this.state.currentUser && this.state.currentUser.email}<button onClick={this.handleLogout}>logout</button></h3>
              <Link to="/items">View All Items</Link>
              &nbsp;
              <Link to="/categories">View All Categories</Link>
              <hr />
            </div>
            :
            <button onClick={this.handleLoginButton}>Login/register</button>
          }
        </header>
        {/* setting up our routes */}
        <Route exact path="/login" render={(props) => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={(props) => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/items" render={(props) => (
          <ItemsIndex
            items={this.state.item}
            formData={this.state.formData}
            getItemByID={this.getItemByID}
            deleteItem={this.deleteItem}
            handleSubmit={this.addItem}
            handleChange={this.handleChange}
            setItemForm={this.setItemForm}
            updateItem={this.updateItem}
          />)} />
        <Route exact path="/categories" render={(props) => (
          <CategoriesIndex categories={this.state.categories} />)} />
        <Route exact path="/items/:id" render={(props) => (
          <Item
            item={this.state.item}
            categories={this.state.categories}
            selectedCategory={this.state.selectedCategory}
            handleChange={this.categoryForm}
            addCategoryToItem={this.addCategoryToItem} />)} />
      </div>
    );
  }
}

export default withRouter(App);
