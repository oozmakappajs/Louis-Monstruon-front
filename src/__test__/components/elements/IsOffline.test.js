import React from 'react';
import { mount } from 'enzyme';
import IsOffline from '../../../components/elements/IsOffline';

describe('Testing render <IsOffline /> Component', () => {
  let wrapperComponent;
  beforeEach(() => {
    wrapperComponent = mount(<IsOffline />);
  });
  // ---Snapshot:
  it('create snapshot', () => {
    expect(wrapperComponent.find(IsOffline)).toMatchSnapshot();
  });
  //  ---Rendering:
  it('component renders correctly', () => {
    expect(wrapperComponent.find(IsOffline).length).toEqual(1);
  });
});
