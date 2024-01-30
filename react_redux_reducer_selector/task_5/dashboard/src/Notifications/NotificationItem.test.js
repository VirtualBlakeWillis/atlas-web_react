import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

import { StyleSheetTestUtils } from 'aphrodite';

describe('NotificationItem', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders with correct type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test'/>);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('renders with correct html prop', () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
    /* contains test */
    expect(wrapper.html()).toContain('<u>test</u>');
  });

});
