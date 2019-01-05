import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './index';


describe('PDFPreview', () => {
  it('rendered without problem', () => {
    shallow(<Pagination onDecrement={jest.fn()} onIncrement={jest.fn()} />);
  });
});
