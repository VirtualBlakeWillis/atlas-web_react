import holberton_logo from '../assets/holberton_logo.jpeg';
import './App.css';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList.js';
import PropTypes from 'prop-types';
import BodySection from '../BodySection/BodySection.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';

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

  constructor(props) {
    super(props);
    this.state = { ctrlPressed: false }
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);    
  }

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
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('keyup', this.handleKeyUp);    
  }


  render() {
    return (
    <>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
        { this.props.isLoggedIn 
        ? <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={listCourses} /> 
          </BodySectionWithMarginBottom>
        : <BodySectionWithMarginBottom title='Log in to continue'>
            <Login />
          </BodySectionWithMarginBottom>
        }
        <BodySection title='News from the School'>
          <p>Some random text</p>
        </BodySection>
        <Footer />
      </div>
    </>
    );
  };
 }

App.defaultProps = appDefaults;

export default App;
