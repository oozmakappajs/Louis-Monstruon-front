import React from 'react';

import Button from '../components/elements/Button';

import '../assets/styles/pages/notFound.scss';

const NotFound = (props) => {

  const goToProducts = () => {
    props.history.push('/');
  };

  return (
    <section className="notFound">
      <h1>Upps,Page Not Found</h1>
      <p>
        404
        <span role="img" aria-label="icon">
          💔😥
        </span>
      </p>
      <Button name="blueBase" action={goToProducts}>Ver más productos</Button>
    </section>
  );
};

export default NotFound;
