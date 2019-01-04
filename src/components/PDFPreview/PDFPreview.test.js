import React from 'react';
import { shallow } from 'enzyme';

import PDFPreview from './index';


describe('PDFPreview', () => {
  it('rendered without problem', () => {
    shallow(<PDFPreview />);
  });
});
