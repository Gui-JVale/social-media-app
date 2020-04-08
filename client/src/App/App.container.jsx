import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../graphql/queries';

import App from './App';
import Spinner from '../components/general/spinner/spinner.component';


const AppContainer = () => {
  const {loading, error, data} = useQuery(GET_CURRENT_USER);

  if(loading) return <Spinner />
  if(error) return <p>Error: {error}</p>

  const isLoggedIn = !!data.currentUser;

  const currentUser = isLoggedIn ? data.currentUser : null;

  return <App currentUser={currentUser} />
};

export default AppContainer;