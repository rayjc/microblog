import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


const Nav = () => {

  return (
    <nav className="Nav navbar navbar-light bg-light">
      <span className="navbar-brand">Microblog</span>
      <div>
        <NavLink exact to="/">Blog</NavLink>
        <NavLink exact to="/new">New Post</NavLink>
      </div>
    </nav>
  )
}


export default Nav;