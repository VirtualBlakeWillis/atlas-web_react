import {LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER} from './uiActionTypes';
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
