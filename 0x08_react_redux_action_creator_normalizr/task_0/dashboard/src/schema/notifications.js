import * as notificationData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

function getAllNotificationsByUser(userId) {
  return notificationData.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => ( notification.context ));
}

export default getAllNotificationsByUser;
