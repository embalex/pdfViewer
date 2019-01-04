import React from 'react';

import { storiesOf } from '@storybook/react';

import Demo from '../components/Demo';


storiesOf('App ', module)
  .add('basic story', () => <Demo />);
