import React from 'react';

import { StyleSheet, css } from 'aphrodite';
import { useState, useEffect } from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false
    }
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.setState({ isLoggedIn: true });
  }
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.email !== this.state.email || prevState.password !== this.state.password) {
      if (this.state.email !== '' && this.state.password !== '') {
        this.setState({ enableSubmit: true });
      } else {
        this.setState({ enableSubmit: false });
      }
    }
  }

  render() {
    return (
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form
        className={css(styles.inputWrapper, styles.small)}
        onSubmit={this.handleLoginSubmit}
        >
          <label htmlFor="email">Email: </label>
          <input className={css(styles.inputWrapperInput)} type="email" id="email" value={this.state.email} onChange={this.handleEmailChange}/>
          <label htmlFor="password">Password: </label>
          <input className={css(styles.inputWrapperInput)} type="password" id="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <input type="submit" id="submit" disabled={!this.state.enableSubmit}/>
        </form>
      </div>
    );
  }
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
  },

  small: {
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    }
  }
});


export default Login;
