import Header from './Header';
import { AppContext } from '../App/AppContext';

import { shallow, mount } from 'enzyme';
import React from 'react';
import jsdom from 'jsdom';
const { JSDOM } = jsdom;

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
global.window = window;
global.document = window.document;
import { StyleSheetTestUtils } from 'aphrodite';

describe('Header', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('should render without crashing', () => {
    const component = shallow(<Header />);
    expect(component.exists()).toBe(true);
  });

  it('should render img and h1 elements', () => {
    const component = shallow(<Header />);
    expect(component.find('img')).toHaveLength(1);
    expect(component.find('h1')).toHaveLength(1);
  });

  /* task 2 react_state */
  it('When mounted with default context value, the logout section is not displayed', () => {
    const component = shallow(<Header />);
    expect(component.find('#logoutSection')).toHaveLength(0);
  });
  it('When mounted with isLoggedIn true & email set, the logout section is displayed', () => {
    const component = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' } }}>
          <Header />
      </AppContext.Provider>
  );    expect(component.find('#logoutSection')).toHaveLength(1);
  });
  it('clicking on the logout section calls the logOut function from context', () => {
    const logOut = jest.fn();
    const component = mount(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'user@test.com' }, logOut: logOut }}>
          <Header />
      </AppContext.Provider>
  );
    component.find('span').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});
