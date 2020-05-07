import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import {
  CLIENT__GET_CURRENT_USER,
  CLIENT__GET_NOTIFICATIONS_COUNT,
} from '../graphql/queries';

import MainNav from '../components/general/main-nav/main-nav.component';

const MainNavContainer = () => {
  const { data } = useQuery(CLIENT__GET_CURRENT_USER);
  const { data: notifications_data } = useQuery(
    CLIENT__GET_NOTIFICATIONS_COUNT
  );

  const currentUser = data.currentUser ? data.currentUser : null;

  return (
    <MainNav
      currentUser={currentUser}
      notificationsCount={notifications_data.notificationsCount}
    />
  );
};

export default MainNavContainer;
