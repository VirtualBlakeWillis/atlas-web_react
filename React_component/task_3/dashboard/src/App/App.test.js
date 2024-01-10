import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import React from 'react';
import jsdom from 'jsdom';
import App from './App';

const { JSDOM } = jsdom;

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('App', () => {
  /* renders App component without crashing */
  it('renders App component without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  /* renders Login component */
  it('renders Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  /* renders Header component */
  it('renders Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  /* renders Footer component */
  it('renders Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  /* renders Notifications component */
  it('renders Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  /* not logged in */
  it('not logged in', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  /* logged in */
  it('logged in', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login')).toHaveLength(0);
    expect(wrapper.find('CourseList')).toHaveLength(1);
  });

  /* logOut alerts with correct string */
  // it('logOut alerts with correct string', () => {
  //   const map = {};
  //   window.addEventListener = jest.fn((event, cb) => {
  //     map[event] = cb;
  //   });
  
  //   const myLogOut = jest.fn(() => undefined);
  //   const wrapper = mount(<App logOut={myLogOut} />);
  //   const spy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  
  //   map.keydown({ key: 'Control' });
  //   map.keydown({ key: 'h' });
  
  //   expect(spy).toHaveBeenCalledWith('Logging you out');
  //   spy.mockRestore();
  // });

});
