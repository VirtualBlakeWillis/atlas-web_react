import React from 'react';
import holberton_logo from '../assets/holberton_logo.jpeg';

import {StyleSheet, css} from 'aphrodite';

import { AppContext } from '../App/AppContext';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';

const mapStateToProps = (state) => {
  const isLoggedIn = state.get('isUserLoggedIn', false);
  const email = state.getIn(['user', 'email']);
  return ({user: {isLoggedIn, email}})
}
const mapDispatchToProps = {
  logOut: logout,
}


function Header({user, logOut}) {


  return (
    <>
    <div className={css(styles['App-header'])}>
      <img className={css(styles['img'])} src={holberton_logo} alt="logo" />
      <h1>School Dashboard</h1>
    </div>
    {user.isLoggedIn && <p id="logoutSection"><b>Welcome {user.email} </b><span onClick={logOut}>Logout</span></p>}
    </>
  );
}

const styles = StyleSheet.create({
  "App-header": {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'red',
    borderBottom: '5px solid red',
  },
  "img": {
    height: '200px',
    marginRight: '10px',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);