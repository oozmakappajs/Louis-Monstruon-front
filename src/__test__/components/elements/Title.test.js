import React from 'react';
import { mount } from 'enzyme';
import Title from '../../../components/elements/Title';

describe('Testing render <Title /> Component', () => {
  let wrapperComponent;
  beforeEach(() => {
    wrapperComponent = mount(<Title />);
  });
  // ---Snapshot:
  it('create snapshot', () => {
    expect(wrapperComponent.find(Title)).toMatchSnapshot();
  });
  //  ---Rendering:
  it('component renders correctly', () => {
    expect(wrapperComponent.find(Title).length).toEqual(1);
  });
});
