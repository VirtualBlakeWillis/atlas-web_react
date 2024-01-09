import React from 'react';
import './Notifications.css';
import close_icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';



const  Notifications = ({displayDrawer, listNotifications})  => {

  return (
    <>
      <div className="menuItem">Your notifications</div>
      {displayDrawer ? (
      <div className="Notifications">
        <button style={{right: '18px', position: 'absolute'}} aria-label='Close' onClick={() => {console.log('Close button has been clicked')}}>
          <img src={close_icon} alt='close-icon' style={{width: '8px'}}/>
        </button>
        {listNotifications.length ==! 0 ? <p>Here is the list of notifications</p>
        : <p>No new notification for now</p>}
        <ul>
          {listNotifications.length === 0 ? 
          <NotificationItem value='No new notification for now' />
          :
          listNotifications.map((notification) => {
            return <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
          })
          }
        </ul>
      </div>
      ) : null}
    </>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;