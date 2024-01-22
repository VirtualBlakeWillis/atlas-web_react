import React from 'react';

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false
};

const logOut = () => undefined

const AppContext = React.createContext({
  user: defaultUser,
  logOut: logOut,
});

export default AppContext;