import React from 'react';
import './Nav.css';
import SearchBar from '../SearchBar/SearchBar';

const Nav = (props) => {
  return (
    <div className='main-container-nav'>
      <SearchBar onSearch={props.onSearch} />
    </div>
  )
}

export default Nav
