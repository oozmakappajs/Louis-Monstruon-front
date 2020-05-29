import React from 'react';
import '../assets/styles/pages/notFound.scss';

const NotFound = (props) => {
  return (
    <>
      <section className="notFound">
        <h1>Upps,Page Not Found</h1>
        <p>
          404
          <span role="img" aria-label="icon">
            💔😥
          </span>
        </p>
      </section>
    </>
  );
};

export default NotFound;
