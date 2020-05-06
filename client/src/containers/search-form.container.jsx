import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import {
  CLIENT__SET_SEARCH_FILTER,
  CLIENT__RESET_SEARCH_FILTER,
} from '../graphql/mutations';

import SearchForm from '../components/general/search-form/search-form.component';

const SearchFormContainer = () => {
  const [setSearchFilter] = useMutation(CLIENT__SET_SEARCH_FILTER);
  const [resetSearchFilter] = useMutation(CLIENT__RESET_SEARCH_FILTER);

  return (
    <SearchForm
      setSearchFilter={(filter) => setSearchFilter({ variables: { filter } })}
      resetSearchFilter={resetSearchFilter}
    />
  );
};

export default SearchFormContainer;
