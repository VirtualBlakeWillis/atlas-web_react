import React from 'react';

const user = {
  email: '',
  password: '',
  isLoggedIn: false
};

const logOut = () => {};

const AppContext = React.createContext({user,logOut});

const useAppContext = () => {
  return React.useContext(AppContext);
}

export { AppContext, useAppContext };