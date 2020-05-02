import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import {
  GET_CURRENT_USER,
  CLIENT__GET_NOTIFICATIONS_COUNT,
} from '../graphql/queries';

import MainNav from '../components/general/main-nav/main-nav.component';
import Spinner from '../components/atoms/spinner/spinner.component';

const MainNavContainer = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);
  const { data: notifications_data } = useQuery(
    CLIENT__GET_NOTIFICATIONS_COUNT
  );

  if (loading) return <Spinner />;
  if (error) return <p>Error {error}</p>;

  const currentUser = data.currentUser ? data.currentUser : null;

  return (
    <MainNav
      currentUser={currentUser}
      notificationsCount={notifications_data.notificationsCount}
    />
  );
};

export default MainNavContainer;
