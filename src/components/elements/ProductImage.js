import React from 'react';
import product from '../../assets/images/products/dino2.jpg';
import '../../assets/styles/components/elements/ProductImage.scss';

const ProductImage = () => {
  return (
    <div className="ProductImage">
      <img className="ProductImage__img" src={product} alt="product" />
    </div>
  );
};

export default ProductImage;
