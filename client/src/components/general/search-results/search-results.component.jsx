import React from 'react';

import SearchResult from '../search-result/search-result.component';

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result, index) => {
        if (result.username) {
          return <SearchResult key={index} type="USER" result={result} />;
        } else {
          return <SearchResult key={index} type="POST" result={result} />;
        }
      })}
    </div>
  );
};

export default SearchResults;
