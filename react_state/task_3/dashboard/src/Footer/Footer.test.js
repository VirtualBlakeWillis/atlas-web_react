import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe('Footer', () => {
  it('should render without crashing', () => {
    const component = shallow(<Footer />);
    expect(component.exists()).toBe(true);
  });

  // it('should render atleast the partial string Copyright', () => {
  //   const component = shallow(<Footer />);
  //   expect(component.find('#p1')).toContain('Copyright');
  // });  
  // it('link should not be displayed when user is not logged in', () => {
  // it('link should be displayed when user is logged in', () => {
});
