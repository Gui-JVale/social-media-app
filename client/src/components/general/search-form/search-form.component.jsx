import React, { useState, useEffect } from 'react';
import FormInput from '../../atoms/form-input/form-input.component';

const SearchForm = ({ setSearchFilter, resetSearchFilter }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    return () => {
      resetSearchFilter();
    };
  }, [resetSearchFilter]);

  const handleChange = (e) => {
    setFilter(e.target.value);
    return setSearchFilter(e.target.value);
  };

  const onSubmit = (e) => {
    e.prevendDefault();
    setSearchFilter(filter);
    return setFilter('');
  };

  return (
    <div className="search-form">
      <form onSubmit={onSubmit}>
        <FormInput
          name="searchFilter"
          type="text"
          value={filter}
          label="Looking for something?"
          handleChange={handleChange}
        />
      </form>
      <div className="button">
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default SearchForm;
