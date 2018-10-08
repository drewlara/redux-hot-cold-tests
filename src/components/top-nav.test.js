import React from 'react';
import {shallow} from 'enzyme';

import { TopNav } from './top-nav';
import {restartGame, generateAuralUpdate} from '../actions';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Dispatches restart game onClick', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('.new').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  })

  it('Dispatches generateAuralUpdate when clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);
    wrapper.find('.status-link').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  })
});