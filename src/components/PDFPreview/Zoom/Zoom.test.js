import React from 'react';
import { shallow } from 'enzyme';

import Zoom from './index';


describe('PDFPreview', () => {
  it('rendered without problem', () => {
    shallow(<Zoom onZoomIn={jest.fn()} onZoomOut={jest.fn()} />);
  });
});
