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
  }
  
  shouldComponentUpdate(nextProps) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length) {
      return true;
    }
    return false;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
  render() {
    return (
      <>
        <div className={css(styles.menuItem, styles.NotificationsMenuItemSMall)}>Your notifications</div>
        {this.props.displayDrawer ? (
        <div className={css(styles.Notifications, styles.NotificationsSmall)}>
          <button style={{right: '18px', position: 'absolute'}} aria-label='Close' onClick={() => {console.log('Close button has been clicked')}}>
            <img src={close_icon} alt='close-icon' style={{width: '8px'}}/>
          </button>
          {this.props.listNotifications.length ==! 0 ? <p>Here is the list of notifications</p>
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
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};


const styles = StyleSheet.create({
  menuItem: {
    float: 'right',
    marginRight: '30px'
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