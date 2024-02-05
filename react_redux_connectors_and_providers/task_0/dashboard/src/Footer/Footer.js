import React from 'react';
import './Footer.css';
import { AppContext } from '../App/AppContext';

function Footer() {
  return (
    <AppContext.Consumer>
      {({ user }) => (
      <footer className="App-footer">
        <p id='p1'>Copyright 2020 - holberton School</p>
        {user.isLoggedIn && <a href="#">Contact us</a>}
      </footer>
      )}
    </AppContext.Consumer>
    
  );
}

export default Footer;
