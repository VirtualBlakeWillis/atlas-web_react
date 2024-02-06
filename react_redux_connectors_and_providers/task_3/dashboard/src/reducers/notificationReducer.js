import{ MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters } from '../actions/notificationActions';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

export default function notificationReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(notificationsNormalizer(action.data));
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}
