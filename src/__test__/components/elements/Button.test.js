import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/elements/Button';

const wrapped = shallow(<Button />);

describe('snapshot of Button component', () => {
  it('should render the Button Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the Titles children', () => {
    expect(wrapped.find(Button).length).toEqual(1);
  });
});

