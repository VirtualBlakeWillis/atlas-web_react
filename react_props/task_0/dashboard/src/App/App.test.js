import App from './App';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';

describe('App', () => {
  /* renders App component without crashing */
  it('renders App component without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
