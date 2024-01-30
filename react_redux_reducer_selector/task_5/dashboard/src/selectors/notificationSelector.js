import { Map } from 'immutable';


function filterTypeSelected(state) {
    return state.filter
}

function getNotifications(state) {
    return Map(state.notifications)
}

function getUnreadNotifications(state) {
  const notifications = Object.values(state.notifications)
    return notifications.filter((notification) => {
        if (notification.isRead === false) {
            return notification
        }
    });
}

export { filterTypeSelected, getNotifications, getUnreadNotifications };

