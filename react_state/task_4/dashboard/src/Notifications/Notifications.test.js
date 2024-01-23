import Notifications from './Notifications';
import { shallow, mount } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });


  it('renders Notifications component without crashing', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders 1 list item', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('NotificationItem')).toHaveLength(1);
  });



  /* task 4 */
  
  it('div.Notifications is not being displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />);

    expect(wrapper.find('.Notifications')).toHaveLength(0);
  });


  /* task 5 */



  /* task 2 react_component */
  it('mockup of markAsRead func called once', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'markAsRead');
    instance.markAsRead();
    expect(instance.markAsRead).toHaveBeenCalled();
    expect(instance.markAsRead).toHaveBeenCalledWith();
    expect(instance.markAsRead).toHaveBeenCalledTimes(1);
  });

  /* task 0 react_state */

  it('clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    wrapper.find('#menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
    expect(handleDisplayDrawer).toHaveBeenCalledWith();
    expect(handleDisplayDrawer).toHaveBeenCalledTimes(1);
  });
  it('verify that clicking on the x button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    wrapper.find('button').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
    expect(handleHideDrawer).toHaveBeenCalledWith();
    expect(handleHideDrawer).toHaveBeenCalledTimes(1);
  });

});
