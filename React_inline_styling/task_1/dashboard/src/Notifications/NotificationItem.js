import React from 'react';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

const defaultNotificationItemProps = {
  type: 'default',
  html: undefined,
  value: '',
  func: () => {},
};

class NotificationItem extends PureComponent {
  render() {
    const { type, html, value, func } = this.props;
    if (html) {
      return <li dangerouslySetInnerHTML={html} onClick={func}></li>;
    } else {
      return <li data-notification-type={type} onClick={func}>{value}</li>;
    }
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
