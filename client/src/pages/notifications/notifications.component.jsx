import React, { useEffect } from 'react';

import { default as Notifications } from '../../containers/notifications.container';

const NotificationsPage = ({ markAsRead }) => {
  useEffect(() => {
    markAsRead();
  }, [markAsRead]);

  return (
    <div className="notifications-page">
      <Notifications />
    </div>
  );
};

export default NotificationsPage;
