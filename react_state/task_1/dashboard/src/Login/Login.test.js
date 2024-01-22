import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';

import { StyleSheetTestUtils } from 'aphrodite';



describe('Login', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('should render without crashing', () => {
    const component = shallow(<Login />);
    expect(component.exists()).toBe(true);
  });

  // changed from 2 in put tags to 3, because of changing submit <button> to <input>
  it('should render 3 input tags and two label tags', () => {
    const component = shallow(<Login />);
    expect(component.find('input')).toHaveLength(3);
    expect(component.find('label')).toHaveLength(2);
  });

  /* react_state task 1 */
  it('submit button should be disabled by default', () => {
    const component = shallow(<Login />);
    expect(component.find('#submit').prop('disabled')).toBe(true);
  });
  it('after changing the value of the two inputs email and password, the submit button should be enabled', () => {
    const component = shallow(<Login />);
    component.find('#email').simulate('change', { target: { value: 'test@test', id: 'email' } });
    component.find('#password').simulate('change', { target: { value: 'test', id: 'password' } });
    expect(component.find('#submit').prop('disabled')).toBe(false);
  });
});
