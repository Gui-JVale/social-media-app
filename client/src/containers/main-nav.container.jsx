import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../graphql/queries'

import MainNav from '../components/general/main-nav/main-nav.component';
import Spinner from '../components/atoms/spinner/spinner.component';

const MainNavContainer = () => {
  const {loading, error, data } = useQuery(GET_CURRENT_USER);

  if(loading) return <Spinner />
  if(error) return <p>Error {error}</p>

  const currentUserId = data.currentUser ? data.currentUser.id : null;

  return <MainNav currentUserId={currentUserId} />
};

export default MainNavContainer;