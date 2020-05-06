import React from 'react';

import { default as SearchResults } from '../../containers/search-results.container';
import { default as SearchForm } from '../../containers/search-form.container';

const SearchPage = () => {
  return (
    <div className="search-page">
      <SearchForm />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
