import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import React from 'react';
import jsdom from 'jsdom';
import App from './App';

import { StyleSheetTestUtils } from 'aphrodite';

const { JSDOM } = jsdom;

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;

describe('App', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
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

  /* react_state task_0 */
  it('default state of displayDrawer is false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
  it('handleDisplayDrawer updates state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });
  it('handleHideDrawer updates state correctly after first calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });

});
