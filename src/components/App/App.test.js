import React from 'react';
import { shallow } from 'enzyme';
import App from './index';
import 'jest-styled-components';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
