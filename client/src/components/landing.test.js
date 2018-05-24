import React from 'react';
import { shallow } from 'enzyme';

import Landing from './landing';

describe('<Landing/>', () => {
  it('Renders without crashing', () => {
    shallow(<Landing/>);
  });
});