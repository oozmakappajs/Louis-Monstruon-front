import React, { useEffect } from 'react';
import { getGlobalState } from '../Context';

import getData from '../hooks/getData';
import SEO from '../components/elements/SEO';
import MainCarousel from '../containers/Carousel/MainCarousel';
import SmallCarousel from '../containers/Carousel/SmallCarousel';

import '../assets/styles/pages/home.scss';

const Home = (props) => {
  const [{ categories, featured }, dispatch] = getGlobalState();

  useEffect(() => {
    (async () => {
      const newCategories = await getData('api/v1/categories/');
      const newFeatured = await getData('api/v1/products/');

      const featureds = newFeatured.filter((item) => item.price < 40 && item.stock < 20);
      dispatch({ type: 'GET_CATEGORIES', payload: newCategories.data });
      dispatch({ type: 'GET_FEATURED', payload: featureds });
    })();
  }, []);

  return (
    <>
      <SEO
        title="Louis Monstruon"
        description="Description Home"
        kw="Stripe, Clothes, Store"
      />
      <MainCarousel featured={featured} />
      <section className="categories">
        {
          categories !== (null || undefined) && categories.map((category) => (
            <SmallCarousel key={category.id} category={category} />
          ))
        }
      </section>
    </>
  );
};

export default Home;
