import Notifications from './Notifications';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Notifications', () => {


  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem')).toHaveLength(3);
  });

  it('renders the correct text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });

  it('first NotificationItem child renders the correct html', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').first().html()).toEqual('<li data-notification-type="default">New course available</li>');
  });
});
