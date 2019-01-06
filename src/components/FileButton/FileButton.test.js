import React from 'react';
import { shallow } from 'enzyme';

import FileButton from './index';


describe('FileButton', () => {
  it('rendered without problem', () => {
    shallow(<FileButton onChange={jest.fn()} />);
  });
});
