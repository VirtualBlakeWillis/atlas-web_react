import React from 'react';
import PropTypes from 'prop-types';

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
NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

export default NotificationItem;
