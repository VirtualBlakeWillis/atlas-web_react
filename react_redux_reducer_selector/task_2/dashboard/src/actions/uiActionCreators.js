import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes';
import { UseDispatch } from 'react-redux';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: {email, password}
  };
}

export const logout = () => {
  return {
    type: LOGOUT
  };
}

export const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
}

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE
  };
}

export const loginRequest = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
    return fetch(`http://localhost:3000/login-success.json`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Error(response.statusText);
      })
      .then(() => {
        dispatch(loginSuccess());
      })
      .catch(() => {
        dispatch(loginFailure());
      });
  };
}

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

export const boundLogin = (email, password) => UseDispatch(login(email, password));
export const boundLogout = () => UseDispatch(logout());
export const boundDisplayNotificationDrawer = () => UseDispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () => UseDispatch(hideNotificationDrawer());
