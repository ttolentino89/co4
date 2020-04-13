import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <header>
      <h1><Link to='/' onClick={props.resetForm}>Co4</Link></h1>
      <div>
        {props.currentUser
          ?
          <>
            <p>Welcome, {props.currentUser.username}!</p>
            <Link to="/items">  View All Items  </Link>
&nbsp;
<Link to="/categories">  View All Categories  </Link>
<Link to="/cities">  View All Cities  </Link>

            <button onClick={props.handleLogout}>logout</button>
          </>
          :
          <button onClick={props.handleLoginButton}>Login/Register</button>
        }
      </div>
    </header>
  )
}
