import React from 'react';
import { shallow } from 'enzyme';
import GoogleText from '../../../components/elements/GoogleText';

describe('GoogleText', () => {
  it('should render GoogleText', () => {
    const component = shallow(<GoogleText />);
    expect(component).toMatchSnapshot();
  });
});

