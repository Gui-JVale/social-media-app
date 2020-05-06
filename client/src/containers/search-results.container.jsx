import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import {} from '../graphql/mutations';
import { GET_SEARCH_RESULTS } from '../graphql/queries';

import Spinner from '../components/atoms/spinner/spinner.component';
import SearchResults from '../components/general/search-results/search-results.component';

const SearchResultsContainer = () => {
  const { loading, error, data } = useQuery(GET_SEARCH_RESULTS);

  if (loading) return <Spinner />;
  if (error) return <p>Error, {error.message}</p>;

  console.log(data);

  return <SearchResults results={data ? data.search : null} />;
};

export default SearchResultsContainer;
