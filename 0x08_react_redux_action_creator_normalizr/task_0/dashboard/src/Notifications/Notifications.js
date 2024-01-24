import React from 'react';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

import { StyleSheet, css } from 'aphrodite';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state
    this.markAsRead = this.props.markAsRead.bind(this);
  }
  




  render() {
    const { handleDisplayDrawer, handleHideDrawer } = this.props;
    return (
      <>
        <div
        id='menuItem'
        className={css(styles.menuItem, styles.NotificationsMenuItemSMall)}
        onClick={handleDisplayDrawer}
        >Your notifications</div>
        {this.props.displayDrawer ? (
        <div className={css(styles.Notifications, styles.NotificationsSmall)}>
          <button
          style={{right: '18px', position: 'absolute'}}
          aria-label='Close'
          onClick={handleHideDrawer}>
            <img src={close_icon} alt='close-icon' style={{width: '8px'}}/>
          </button>
          {this.props.listNotifications.length > 0 ? <p>Here is the list of notifications</p>
          : <p>No new notification for now</p>}
          <ul className={css(styles.ul)}>
            {this.props.listNotifications.length === 0 ? 
            <NotificationItem value='No new notification for now' func={() => {this.markAsRead(notification.id)}}/>
            :
            this.props.listNotifications.map((notification) => {
              return <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} func={() => {this.markAsRead(notification.id)}}/>
            })
            }
          </ul>
        </div>
        ) : null}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

const opacityKeyframes = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  }
}

const translateKeyframes = {
  '0%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '100%': {
    transform: 'translateY(5px)',
  }
}

const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    marginRight: '30px',
    zIndex: '1',
    backgroundColor: '#fff8f8',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityKeyframes, translateKeyframes],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    }
  },
  Notifications: {
    padding: '20px',
    border: '2px dashed red',
    position: 'absolute',
    right: '40px',
    top: '40px',
    width: 'fit-content'
  },
  default: {
    color: 'blue'
  },
  urgent: {
    color: 'red'
  },
  ul: {
    listStyle: 'none',
    padding: '0',
  },
  NotificationsSmall: {
    '@media (max-width: 900px)': {
      border: 'none',
      position: 'static',
      margin: '0',
      padding: '0',
      width: '100%',
      fontSize: '20px',
    }
  },
  NotificationsMenuItemSMall: {
    '@media (max-width: 900px)': {
      display: 'none',
    }
  }
});


export default Notifications;