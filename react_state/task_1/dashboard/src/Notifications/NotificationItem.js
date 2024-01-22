import React from 'react';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  small: {
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderBottom: '1px solid lightgrey',
      padding: '10px 8px',
      fontSize: '20px',
    }
  }
});

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
      return <li className={css(type === 'urgent' ? styles.urgent : styles.default, styles.small)} dangerouslySetInnerHTML={html} onClick={func}></li>;
    } else {
      return <li className={css(type === 'urgent' ? styles.urgent : styles.default, styles.small)} data-notification-type={type} onClick={func}>{value}</li>;
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
