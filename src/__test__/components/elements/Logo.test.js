import React from 'react';
import { mount } from 'enzyme';
import Logo from '../../../components/elements/Logo';

describe('Testing render <Logo /> Component', () => {
  let wrapperComponent;
  beforeEach(() => {
    wrapperComponent = mount(<Logo />);
  });
  // ---Snapshot:
  it('create snapshot', () => {
    expect(wrapperComponent.find(Logo)).toMatchSnapshot();
  });
  //  ---Rendering:
  it('component renders correctly', () => {
    expect(wrapperComponent.find(Logo).length).toEqual(1);
  });
});
