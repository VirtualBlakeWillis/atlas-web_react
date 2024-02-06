import { bool } from "prop-types";
import { MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";
import { useDispatch } from "react-redux";

export const markAsAread = (payload) => ({
  type: MARK_AS_READ,
  payload
});

export const setNotificationFilter = (payload) => ({
  type: SET_TYPE_FILTER,
  payload
});

export const setLoadingState = (payload) => ({
  type: SET_LOADING_STATE,
  payload
});

export const setNotifications = (payload) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  payload
});

export const fetchNotifications = () => {
  return (dispatch) => {
    dispatch(setLoadingState(true));
    fetch('/notifications.json')
    .then((data) => {
      dispatch(setNotifications(data))
    })
    .finally(()=> {
      dispatch(setLoadingState(false));
    })
  }
}

export const boundMarkAsAread = (index) => useDispatch(markAsAread(index));
export const boundSetNotificationFilter = (filter) => useDispatch(setNotificationFilter(filter));