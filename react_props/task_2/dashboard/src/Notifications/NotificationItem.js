import React from 'react';

const defaultNotificationItemProps = {
  type: 'default',
  html: undefined,
  value: '',
};

function NotificationItem({ type, html, value}) {
  if (html) {
    return <li dangerouslySetInnerHTML={html}></li>;
  } else {
    return <li data-notification-type={type}>{value}</li>;
  }
}

NotificationItem.defaultProps = defaultNotificationItemProps;

export default NotificationItem;
