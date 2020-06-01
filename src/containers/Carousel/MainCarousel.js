import React from 'react';

import Card from './Card';

import '../../assets/styles/containers/Carousel/MainCarousel.scss';

const MainCarousel = (props) => {
  return (
    <section className="featured MainCarousel">
      <h1>Featured</h1>
      {
        props.featured !== (null || undefined) &&
        props.featured.map((item) => {
          let url;

          if (item.subcategory === 1) {
            url = `/man/${item.subcategory}/${item.id}`;
          } else if (item.subcategory === 2) {
            url = `/woman/${item.subcategory}/${item.id}`;
          } else if (item.subcategory === 3) {
            url = `/kid/${item.subcategory}/${item.id}`;
          } else {
            url = `/accessories/${item.subcategory}/${item.id}`;
          }

          return (
            <Card key={item.id} item={item} url={url} />
          );
        })
      }
    </section>
  );
};

export default MainCarousel;
