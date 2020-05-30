import React, { useEffect } from 'react';
import { getGlobalState } from '../Context';
import SEO from '../components/elements/SEO';

import MainCarousel from '../containers/Carousel/MainCarousel';
import SmallCarousel from '../containers/Carousel/SmallCarousel';

import '../assets/styles/pages/home.scss';

const Home = (props) => {
  const [{ categories, featured }, dispatch] = getGlobalState();

  const handleGetData = (type) => {
    const newCategories = ['Mujer', 'Hombre', 'Niños', 'Accesorios'];
    const newFeatured = ['featured1', 'featured2', 'featured3', 'featured4'];

    if (type === 'categories') {
      return newCategories;
    }
    return newFeatured;
  };

  const handleSetData = () => {
    dispatch({ type: 'GET_CATEGORIES', payload: handleGetData('categories') });
    dispatch({ type: 'GET_FEATURED', payload: handleGetData('featured') });
  };

  useEffect(() => {
    handleSetData();
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
            <SmallCarousel key={category} sectionName={category} />
          ))
        }
      </section>
    </>
  );
};

export default Home;
