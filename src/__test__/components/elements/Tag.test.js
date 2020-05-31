import React from 'react';
import { shallow } from 'enzyme';
import Tag from '../../../components/elements/Tag';

const wrapped = shallow(<Tag />);

describe('snapshot of Tag component', () => {
  it('should render the Tag Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
  it('renders the Titles children', () => {
    expect(wrapped.find(Tag).length).toEqual(1);
  });
});
