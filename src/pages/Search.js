import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchCard from '../components/SearchCard';
import '../assets/styles/pages/search.scss';

const Search = (props) => {
  return (
    <>
      <Header type="search" />
      <main className="content">
        <section className="results">
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
          <SearchCard />
        </section>
      </main>
      <Footer icons />
    </>
  );
};

export default Search;
