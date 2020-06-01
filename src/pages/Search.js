import React from 'react';
import { getGlobalState } from '../Context';

import SEO from '../components/elements/SEO';
import SearchCard from '../components/SearchCard';

import '../assets/styles/pages/search.scss';

const Search = (props) => {
  const [{ settings: { theme } }] = getGlobalState();

  return (
    <>
      <SEO
        title="Search | Louis Monstruon"
        description="Description Search"
        kw="Stripe, Clothes, Store"
      />
      <section className={`results ${theme}`}>
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
