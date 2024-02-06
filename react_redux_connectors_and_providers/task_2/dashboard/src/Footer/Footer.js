import React from 'react';
import './Footer.css';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';



function Footer({ user }) {
  return (
      <footer className="App-footer">
        <p id='p1'>Copyright 2020 - holberton School</p>
        {user.isLoggedIn && <a href="#">Contact us</a>}
      </footer>
      )
}

export const mapStateToProps = (state) => {
  const isLoggedIn = state.get("isUserLoggedIn", false);
  return { user: { isLoggedIn } };
};

export default connect(mapStateToProps)(Footer);
