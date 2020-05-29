import React from 'react';
import SearchCard from '../components/SearchCard';
import '../assets/styles/pages/search.scss';

const Search = (props) => {
  return (
    <>
      <section className="results">
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </section>
    </>
  );
};

export default Search;
