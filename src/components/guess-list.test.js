import React from 'react';
import {shallow} from 'enzyme';

import { GuessList } from './guess-list';

describe('<GuessList />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessList guesses={[]}/>);
  });

  it('Renders list of guesses', () => {
    const wrapper = shallow(<GuessList guesses={[1, 2, 3, 4, 5]}/>);
    expect(wrapper.find('li').length).toEqual(5);
  })
})