import React from 'react';

import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.AppBody)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputWrapper)}>
        <label htmlFor="email">Email: </label>
        <input className={css(styles.inputWrapperInput)} type="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input className={css(styles.inputWrapperInput)} type="password" id="password" />
        <button>OK</button>
      </div>
    </div>
  );
}
const styles = StyleSheet.create({
  AppBody: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: '50px',
    minHeight: '50vh'
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputWrapperInput: {
    marginRight: '10px',
    marginLeft: '10px'
  }
});


export default Login;
