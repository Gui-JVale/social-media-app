import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_NOTIFICATIONS } from '../graphql/queries';

import Notifications from '../components/general/notifications/notifications.component';
import Spinner from '../components/atoms/spinner/spinner.component';

const NotificationsContainer = () => {
  const { loading, error, data } = useQuery(GET_NOTIFICATIONS);

  if (loading) return <Spinner />;
  if (error) return <p>Error, {error.message}</p>;

  const notifications = data.getNotifications;

  return <Notifications notifications={notifications} />;
};

export default NotificationsContainer;
