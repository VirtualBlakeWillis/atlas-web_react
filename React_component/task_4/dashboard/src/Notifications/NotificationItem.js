import React from 'react';
import PropTypes from 'prop-types';

const defaultNotificationItemProps = {
  type: 'default',
  html: undefined,
  value: '',
  func: () => {},
};

function NotificationItem({ type, html, value, func}) {
  if (html) {
    return <li dangerouslySetInnerHTML={html} onClick={func}></li>;
  } else {
    return <li data-notification-type={type} onClick={func}>{value}</li>;
  }
}

NotificationItem.defaultProps = defaultNotificationItemProps;
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
  func: PropTypes.func,
};

export default NotificationItem;
