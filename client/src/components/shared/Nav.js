import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav className="viewItemsNav">
      <NavLink to='/items'>Items</NavLink>
      <NavLink to='/create'>Create Item</NavLink>
  </nav>
)

export default Nav
