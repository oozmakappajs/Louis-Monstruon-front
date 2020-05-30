import React from 'react';
import { getGlobalState } from '../Context';

import SearchCard from '../components/SearchCard';

import '../assets/styles/pages/search.scss';

const Search = (props) => {
  const [{ settings: { theme } }] = getGlobalState();

  return (
    <section className={`results ${theme}`}>
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
      <SearchCard />
    </section>
  );
};

export default Search;
