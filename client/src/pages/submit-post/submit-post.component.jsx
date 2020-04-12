import React from 'react';

import Profile from '../../components/profile/profile/profile.component';
import { default as CreatePostForm } from '../../containers/create-post-form.container';

const SubmitPostPage = () => (
  <div className="make-post-page">
    <Profile isPost/>
    <CreatePostForm />

  </div>
);

export default SubmitPostPage;