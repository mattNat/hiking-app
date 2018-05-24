import React from 'react';
import { shallow } from 'enzyme';

import Instructions from './Instructions';

describe('<Instructions/>', () => {
  it('Renders without crashing', () => {
    shallow(<Instructions/>);
  });
});