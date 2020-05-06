import React from 'react';

import SearchResults from '../../components/general/search-results/search-results.component';
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
