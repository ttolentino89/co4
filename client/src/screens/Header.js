import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/shared/Navbar.js'

const authenticatedOptions = (
    <div className="links">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/search">Search Items</NavLink>
    <NavLink to="/items">View Items</NavLink>
    <NavLink to="/sign-out">Sign Out</NavLink>
    </div>
)

const unauthenticatedOptions = (
    <div className="links">
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-in">Sign In</NavLink>
    </div>
)

const Header = ({ user }) => (
    <Navbar>
        <div className="nav">
            {user && <span className="navbar-text">Welcome, {user.email}</span>}
            {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
    </Navbar>
)

export default Header
