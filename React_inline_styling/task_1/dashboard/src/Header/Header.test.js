import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

import { StyleSheetTestUtils } from 'aphrodite';

describe('Header', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('should render without crashing', () => {
    const component = shallow(<Header />);
    expect(component.exists()).toBe(true);
  });

  it('should render img and h1 elements', () => {
    const component = shallow(<Header />);
    expect(component.find('img')).toHaveLength(1);
    expect(component.find('h1')).toHaveLength(1);
  });
});
