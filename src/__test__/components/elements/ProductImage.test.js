import React from 'react';
import { mount } from 'enzyme';
import ProductImage from '../../../components/elements/ProductImage';

describe('Testing render <ProductImage /> Component', () => {
  let wrapperComponent;
  beforeEach(() => {
    wrapperComponent = mount(<ProductImage />);
  });
  // ---Snapshot:
  it('create snapshot', () => {
    expect(wrapperComponent.find(ProductImage)).toMatchSnapshot();
  });
  //  ---Rendering:
  it('component renders correctly', () => {
    expect(wrapperComponent.find(ProductImage).length).toEqual(1);
  });
});
