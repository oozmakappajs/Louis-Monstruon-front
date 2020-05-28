// import React, { useState } from 'react';
import React from 'react';
import '../assets/styles/containers/ProductSlider.scss';
import ProductImage from '../components/elements/ProductImage';

const ProductSlider = () => {
  const numberOfSlides = [1, 2, 3, 4];
  // const [currentImage, useCurrentImage] = useState();
  // const [currentDot, useCurrentDot] = useState();

  // const gettingCurrentImage = (item) => {
  //   return item;
  // };

  // const gettingCurrentDot = (item) => {
  //   return item;
  // };

  // useCurrentImage(gettingCurrentImage);
  // useCurrentDot(gettingCurrentDot);

  // console.log('current image: ', currentImage);
  // console.log('current dot: ', currentDot);

  return (
    <>
      <div className="ProductSlider">
        <div className="ProductSlider__container">
          {
            numberOfSlides.map((number) => {
              // gettingCurrentImage(number);
              return (
                <div key={number} className="ProductSlider-item">
                  <ProductImage />
                </div>
              );
            })
          }
        </div>
      </div>
      {/* dots */}
      <div className="ProductSlider__dots">
        {
          numberOfSlides.map((number) => {
            // gettingCurrentDot(number);
            return (
              <span key={number} className="ProductSlider__dots-item" />
            );
          })
        }
      </div>
    </>
  );
};
export default ProductSlider;

