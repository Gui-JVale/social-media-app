import React from 'react';

import Notification from '../notification/notification.component';

const Notifications = ({ notifications }) => (
  <div className="notifications">
    {notifications.map((notification, index) => (
      <Notification key={index} notification={notification} />
    ))}
  </div>
);

export default Notifications;
