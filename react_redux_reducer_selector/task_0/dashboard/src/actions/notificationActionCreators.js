import { MARK_AS_READ, SET_TYPE_FILTER } from "./notificationActionTypes";
import { useDispatch } from "react-redux";

export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter
});

export const boundMarkAsAread = (index) => useDispatch(markAsAread(index));
export const boundSetNotificationFilter = (filter) => useDispatch(setNotificationFilter(filter));