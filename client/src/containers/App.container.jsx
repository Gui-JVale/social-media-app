import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../graphql/queries';

import App from '../App/App';
import Spinner from '../components/atoms/spinner/spinner.component';

const AppContainer = () => {
  const { loading, error, data, client } = useQuery(GET_CURRENT_USER);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;
  // Store notifications count on local state
  if (data.currentUser) {
    client.writeData({
      data: {
        currentUser: data.currentUser,
        notificationsCount: data.currentUser.unreadNotificationsCount,
      },
    });
  }

  const isLoggedIn = !!data.currentUser;

  const currentUser = isLoggedIn ? data.currentUser : null;

  return <App currentUser={currentUser} />;
};

export default AppContainer;
