import React from 'react';
import '../assets/styles/components/ProductDescription.scss';

const ProductDescription = (props) => {
  return (
    <div className="ProductDescription">
      <p className="ProductDescription__text">
        {props.children}
      </p>
    </div>
  );
};

export default ProductDescription;
