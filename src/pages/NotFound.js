import React from 'react';

import '../assets/styles/pages/notFound.scss';

const NotFound = (props) => {
  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
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
      <nav className="menu_navigation">
        <h2>Menu de Navegación</h2>
      </nav>
    </>
  );
};

export default NotFound;
