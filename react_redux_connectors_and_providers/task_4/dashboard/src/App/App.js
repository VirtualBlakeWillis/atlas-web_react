import holberton_logo from '../assets/holberton_logo.jpeg';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';

import Notifications from '../Notifications/Notifications.js';

import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';

import {StyleSheet, css} from 'aphrodite';

import { useState } from 'react';
import { AppContext } from './AppContext.js';
import { uiReducer } from '../reducers/uiReducer.js'
import { connect } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators.js';




const appDefaults = {
  isLoggedIn: false,
  logOut: () => undefined,
};
const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
];
const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: {__html: '<strong>Urgent requirement</strong> - complete by EOD'}}
];
class App extends React.Component {
  static contextType = AppContext;

  constructor(props) {
    super(props);
    
    this.state = { 
      user: {
        email: '',
        password: '',
        isLoggedIn: false
      },
      logOut: this.logOut,
      ctrlPressed: false,
      listNotifications: listNotifications,
     }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);  
  }

  markNotificationAsRead(id) {
    this.setState({listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id)});
  }

  /* removed in task 8 of final project */
  // logIn(email, password) {
  //   this.setState({user: {email: email, password: password, isLoggedIn: true}});
  // }
  // logOut() {
  //   this.setState({user: this.context.user});
  // }


  handleKeyDown(e) {
    if (e.key === 'Control') {
      this.setState({ ctrlPressed: true });
    }
    if (e.key === 'h' && this.state.ctrlPressed) {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  handleKeyUp(e) {
    if (e.key === 'Control') {
      this.setState({ ctrlPressed: false });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('keyup', this.handleKeyUp);
    this.setState({user: this.context.user});
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);    
  }


  render() {
    const { displayDrawer } = this.props;
    const { user, logOut, listNotifications } = this.state;
    const { isLoggedIn } = this.props

    return (
 
    <AppContext.Provider value={{user, logOut: logOut}}>
      <Notifications
      listNotifications={listNotifications}
      displayDrawer={displayDrawer}
      handleDisplayDrawer={this.props.displayNotificationDrawer}
      handleHideDrawer={this.props.hideNotificationDrawer}
      markAsRead={this.markNotificationAsRead.bind(this)}
      />
      <div className={css(styles.App)}>
        <Header />
        { isLoggedIn 
        ? <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={listCourses} /> 
          </BodySectionWithMarginBottom>
        : <BodySectionWithMarginBottom title='Log in to continue'>
            <Login logIn={this.props.login}/>
          </BodySectionWithMarginBottom>
        }
        <BodySection title='News from the School'>
          <p>Some random text</p>
        </BodySection>
        <Footer />
      </div>
    </AppContext.Provider>
    );
  };
 }

App.defaultProps = appDefaults;

const styles = StyleSheet.create({
  App: {
    fontFamily: 'sans-serif',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  body: {},
  footer: {},
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  }, dispatch);
}

const mapStateToProps = (state) => {
  const uiReducer = state.ui;
  
  const isLoggedIn =  uiReducer.get('isUserLoggedIn', false);
  const displayDrawer =  uiReducer.get('isNotificationDrawerVisible', false);
  return ({isLoggedIn, displayDrawer})
};
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default connect(mapStateToProps, mapDispatchToProps)(App);
export { ConnectedApp, mapStateToProps }
