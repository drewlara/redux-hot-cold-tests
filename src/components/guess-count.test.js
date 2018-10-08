import React from 'react';
import {shallow} from 'enzyme';

import { GuessCount } from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Renders guess count text', () => {
    const testCount = 5;
    const wrapper = shallow(<GuessCount guessCount={testCount} />);
    expect(wrapper.text()).toEqual(`You've made ${testCount} guesses!`);
  });
})
