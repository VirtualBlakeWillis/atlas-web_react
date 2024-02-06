import React from 'react';
import './Footer.css';
import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.user
})

function Footer() {
  const user = props.user
  return (
      <footer className="App-footer">
        <p id='p1'>Copyright 2020 - holberton School</p>
        {user.isLoggedIn && <a href="#">Contact us</a>}
      </footer>
      )
}

export default connect(mapStateToProps)(Footer);
