import React from 'react';
import '../assets/styles/components/PageSlider.scss';

const PageSlider = () => {
  const slides = [1, 2, 3, 4];
  return (
    <div className="PageSlider">
      {
        slides.map((number) => {
          return (
            <span key={number} className="PageSlider__item" />
          );
        })
      }
    </div>
  );
};

export default PageSlider;
