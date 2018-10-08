import React from 'react';
import {shallow} from 'enzyme';

import { AuralStatus } from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Renders an aural status update', () => {
    const testStatus = 'Test status.';
    let wrapper = shallow(<AuralStatus auralStatus={testStatus}/>);
    expect(wrapper.contains(testStatus)).toEqual(true);
  })
});