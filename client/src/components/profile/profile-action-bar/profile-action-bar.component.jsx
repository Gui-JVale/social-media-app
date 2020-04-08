import React from 'react';

import ActionBar from '../../general/action-bar/action-bar.component';
import Cta from '../../general/cta/cta.component';

const ProfileActionBar = () => (
  <ActionBar>
    <Cta text="Followers"/>
    <Cta text="Following"/>
    <Cta text="Make Post"/>
  </ActionBar>
);

export default ProfileActionBar;