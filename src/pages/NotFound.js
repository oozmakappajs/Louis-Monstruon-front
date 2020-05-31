import React from 'react';
import { getGlobalState } from '../Context';

import SEO from '../components/elements/SEO';
import Button from '../components/elements/Button';

import '../assets/styles/pages/notFound.scss';

const NotFound = (props) => {
  const [{ settings: { theme } }] = getGlobalState();

  const goToProducts = () => {
    props.history.push('/');
  };

  return (
    <>
      <SEO
        title="Not Found | Louis Monstruon"
        description="Description Not Found"
        kw="Stripe, Clothes, Store"
      />
      <section className={`notFound ${theme}`}>
        <h1>Upps 3212,we have a 3312 ,Page Not Found</h1>
        <h3>
          404
          {' '}
          <span role="img" aria-label="icon">
            💔😥
          </span>
        </h3>
        <Button name="base-blue" action={goToProducts}>Ver más productos</Button>
      </section>
    </>
  );
};

export default NotFound;
