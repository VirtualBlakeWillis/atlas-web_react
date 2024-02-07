import{ MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters, SET_LOADING_STATE } from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
  loading: false,
});

export default function notificationReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(notificationsNormalizer(action.payload));
    case MARK_AS_READ:
      return state.setIn(['notifications', action.payload, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.payload);
    case SET_LOADING_STATE:
      return state.set('loading', action.payload)
    default:
      return state;
  }
}
