import Notifications from './Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('Notifications', () => {
  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it('renders the correct text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });
});
