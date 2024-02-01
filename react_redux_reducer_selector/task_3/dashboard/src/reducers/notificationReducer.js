import{ MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActions';

const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
}

export default function notificationReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map(notification => {
          notification.isRead = false;
          return notification;
        })
      }
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map(notification => {
          if (notification.id === action.index) {
            notification.isRead = true;
          }
          return notification;
        })
      }
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state;
  }
}