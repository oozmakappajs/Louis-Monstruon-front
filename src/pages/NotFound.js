import React from 'react';

import '../assets/styles/pages/notFound.scss';

const NotFound = (props) => {
  return (
    <>
      <main className="content">
        <section className="notFound">
          <h1>Page Not Found</h1>
          <p>
            404
            <span role="img" aria-label="icon">
              💔😥
            </span>
          </p>
        </section>
      </main>
    </>
  );
};

export default NotFound;
