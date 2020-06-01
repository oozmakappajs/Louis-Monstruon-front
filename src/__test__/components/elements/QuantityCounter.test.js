import React from 'react';
import { mount } from 'enzyme';
// import { Box, Icon, Typography } from '@material-ui/core';
import QuantityCounter from '../../../components/elements/QuantityCounter';

describe('Testing render <QuantityCounter /> Component', () => {
  let wrapperComponent;
  beforeEach(() => {
    wrapperComponent = mount(<QuantityCounter />);
  });
  // ---Snapshot:
  it('create snapshot', () => {
    expect(wrapperComponent.find(QuantityCounter)).toMatchSnapshot();
  });
  //  ---Rendering:
  it('component renders correctly', () => {
    expect(wrapperComponent.find(QuantityCounter).length).toEqual(1);
  });
});
