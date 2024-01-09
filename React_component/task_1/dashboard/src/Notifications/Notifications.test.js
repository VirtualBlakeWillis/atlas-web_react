import Notifications from './Notifications';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('Notifications', () => {


  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 1 list item', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(1);
  });



  /* task 4 */
  it('menu item is being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });
  
  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });

  it('menu item is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.menuItem')).toHaveLength(1);
  });

  it('div.Notifications is being displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  /* task 5 */
  it('renders correctly when not passing an array to listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('renders correctly when passing an empty array to listNotifications property', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find('.Notifications')).toHaveLength(1);
  });

  it('displays correct text when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.Notifications p')).toHaveLength(1);
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
  });



});
