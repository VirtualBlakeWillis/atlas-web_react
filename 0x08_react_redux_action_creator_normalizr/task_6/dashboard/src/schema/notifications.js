import * as notificationData from '../../notifications.json';
import { normalize, schema } from 'normalizr';


const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});
const normalizedData = normalize(notificationData, [notification]);

function getAllNotificationsByUser(userId) {
  // return notificationData.default
  //   .filter((notification) => notification.author.id === userId)
  //   .map((notification) => ( notification.context ));
  /* we want to rewrite this to use the normalizedData object */
  const notifications = Object.values(normalizedData.entities.notifications);
  const userNotifications = notifications.filter((notification) => {
    if (notification.author === userId) {
      return notification;
    }
  });
  const messages = Object.values(normalizedData.entities.messages);
  const userMessages = messages.filter((message) => {
    for (let x of userNotifications) {
      if (x.context === message.guid) {
        return message;
      }
    }
  });

  return userMessages;
}


export { getAllNotificationsByUser, normalizedData };
