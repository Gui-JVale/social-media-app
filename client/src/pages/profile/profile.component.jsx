import React from 'react';
import { Route } from 'react-router-dom';

import { default as Profile } from '../../containers/profile.container'
                                
const ProfilePage = ({ match }) => (                                                                      
  <div className="profile-page">
    <Route exact path={`${match.path}/:userId`} render={(props) => <Profile big {...props}/>} />
  </div>
);

export default ProfilePage;