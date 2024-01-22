import React from 'react';
import holberton_logo from '../assets/holberton_logo.jpeg';

import {StyleSheet, css} from 'aphrodite';

function Header() {
  return (
    <div className={css(styles['App-header'])}>
      <img className={css(styles['img'])} src={holberton_logo} alt="logo" />
      <h1>School Dashboard</h1>
    </div>
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

export default Header;