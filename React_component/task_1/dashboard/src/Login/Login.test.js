import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';

describe('Login', () => {
  it('should render without crashing', () => {
    const component = shallow(<Login />);
    expect(component.exists()).toBe(true);
  });

  it('should render two input tags and two label tags', () => {
    const component = shallow(<Login />);
    expect(component.find('input')).toHaveLength(2);
    expect(component.find('label')).toHaveLength(2);
  });
});
