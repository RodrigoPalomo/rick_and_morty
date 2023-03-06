import React from 'react';
import './Nav.css';
import SearchBar from '../SearchBar/SearchBar';

import { Link } from 'react-router-dom';

const Nav = ({ onSearch }) => {
  return (
    <nav className='main-container-nav'>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  )
}

export default Nav
