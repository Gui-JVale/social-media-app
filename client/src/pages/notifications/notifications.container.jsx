import React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { MARK_NOTIFICATIONS_AS_READ } from '../../graphql/mutations';
import { CLIENT__GET_NOTIFICATIONS_COUNT } from '../../graphql/queries';

import NotificationsPage from './notifications.component';

const NotificationsPageContainer = () => {
  const [markNotificationsAsRead] = useMutation(MARK_NOTIFICATIONS_AS_READ, {
    update(cache) {
      cache.writeQuery({
        query: CLIENT__GET_NOTIFICATIONS_COUNT,
        data: { notificationsCount: 0 },
      });
    },
  });

  return <NotificationsPage markAsRead={markNotificationsAsRead} />;
};

export default NotificationsPageContainer;
