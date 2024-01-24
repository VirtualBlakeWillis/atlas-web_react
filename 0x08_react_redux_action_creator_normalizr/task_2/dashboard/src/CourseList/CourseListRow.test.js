import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

import { StyleSheetTestUtils } from 'aphrodite';

describe('CourseListRow', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  /* when isHeader is true */
  it('renders correctly when isHeader is true and textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="First" />
    );
    expect(wrapper.find('th').length).toEqual(1);
    expect(wrapper.find('th').text()).toEqual('First');
    expect(wrapper.find('th').prop('colSpan')).toEqual('2');
  });

  it('renders correctly when isHeader is true and textSecondCell is not null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
    );
    expect(wrapper.find('th').length).toEqual(2);
    expect(wrapper.find('th').first().text()).toEqual('First');
    expect(wrapper.find('th').last().text()).toEqual('Second');
  });

  /* when isHeader is false */
  it('renders correctly when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell="First" textSecondCell="Second" />
    );
    expect(wrapper.find('td').length).toEqual(2);
    expect(wrapper.find('td').first().text()).toEqual('First');
    expect(wrapper.find('td').last().text()).toEqual('Second');
  });

});