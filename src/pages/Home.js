import React from 'react';

import { getGlobalState } from '../Context';

import '../assets/styles/main.scss';
import '../assets/styles/pages/home.scss';

const Home = (props) => {
  const [{ categories, featured }, dispatch] = getGlobalState();

  const handleGetData = (type) => {
    const newCategories = ['category1', 'category2', 'category3', 'category4'];
    const newFeatured = ['featured1', 'featured2', 'featured3', 'featured4'];

    if (type === 'categories') {
      return newCategories;
    }
    return newFeatured;
  };

  const handleSetData = (type) => {
    if (type === 'categories') {
      return dispatch({ type: 'GET_CATEGORIES', payload: handleGetData('categories') });
    }
    return dispatch({ type: 'GET_FEATURED', payload: handleGetData('featured') });
  };

  window.onload = () => {
    handleSetData('featured');
    handleSetData('categories');
  };

  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
      <main className="content">
        <section className="featured" featured={featured}>
          <div>
            <p>destacado</p>
          </div>
          <div>
            <p>destacado</p>
          </div>
          <div>
            <p>destacado</p>
          </div>
          <div>
            <p>destacado</p>
          </div>
        </section>
        <section className="categories" categories={categories}>
          <div>
            <p>Card</p>
          </div>
          <div>
            <p>Card</p>
          </div>
          <div>
            <p>Card</p>
          </div>
          <div>
            <p>Card</p>
          </div>
        </section>
      </main>
      <nav className="menu_navigation">
        <h2>Menu de Navegación</h2>
      </nav>
    </>
  );
};

export default Home;
