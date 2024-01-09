import React from 'react';
import './Header.css';
import holberton_logo from '../assets/holberton_logo.jpeg';

function Header() {
  return (
    <div className="App-header">
      <img src={holberton_logo} alt="logo" />
      <h1>School Dashboard</h1>
    </div>
  );
}

export default Header;