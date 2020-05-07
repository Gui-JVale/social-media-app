import React from 'react';
import { Route } from 'react-router-dom';

import { default as Profile } from '../../containers/profile.container';
import EditProfile from '../../components/profile/edit-profile/edit-profile.component';

const ProfilePage = ({ match }) => (
  <div className="profile-page">
    <Route
      exact
      path={`${match.path}/:userId`}
      render={(props) => <Profile big {...props} />}
    />
    <Route
      exact
      path={`${match.path}/:userId/edit`}
      render={(props) => <EditProfile {...props} />}
    />
  </div>
);

export default ProfilePage;
