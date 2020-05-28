import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../assets/styles/pages/notFound.scss';

const NotFound = (props) => {
  return (
    <>
      <Header type="back" />
      <main className="content">
        <section className="notFound">
          <h1>Upps,Page Not Found</h1>
          <p>
            404
            <span role="img" aria-label="icon">
              💔😥
            </span>
          </p>
        </section>
      </main>
      <Footer>Louis Monstruon</Footer>
    </>
  );
};

export default NotFound;
