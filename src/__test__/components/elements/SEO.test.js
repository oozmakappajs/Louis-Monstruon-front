import React from 'react';
import { mount } from 'enzyme';
import SEO from '../../../components/elements/SEO';

describe('Testing render <SEO /> Component', () => {
  let wrapperComponent;
  beforeEach(() => {
    wrapperComponent = mount(<SEO />);
  });
  // ---Snapshot:
  it('create snapshot', () => {
    expect(wrapperComponent.find(SEO)).toMatchSnapshot();
  });
  //  ---Rendering:
  it('component renders correctly', () => {
    expect(wrapperComponent.find(SEO).length).toEqual(1);
  });
});
