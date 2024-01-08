import App from './App';
import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  /* renders div with the class App-header */
  it('renders App component with header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header')).toHaveLength(1);
  });

  /* renders div with the class App-body */
  it('renders App component with body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body')).toHaveLength(1);
  });

  /* renders div with the class App-footer */
  it('renders App component with footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer')).toHaveLength(1);
  });
});
