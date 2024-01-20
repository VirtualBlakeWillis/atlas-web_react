import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe('Footer', () => {
  it('should render without crashing', () => {
    const component = shallow(<Footer />);
    expect(component.exists()).toBe(true);
  });

  it('should render atleast the partial string Copyright', () => {
    const component = shallow(<Footer />);
    expect(component.text()).toContain('Copyright');
  });
});
