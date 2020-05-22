import React from 'react';

import '../assets/styles/main.scss';
import '../assets/styles/pages/home.scss';

const Home = (props) => {
  return (
    <>
      <header className="header">
        <h2>Header</h2>
      </header>
      <main className="content">
        <section className="featured">
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
        <section className="categories">
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
