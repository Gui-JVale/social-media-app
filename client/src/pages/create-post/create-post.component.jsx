import React from 'react';

import Profile from '../../components/profile/profile/profile.component';
import { default as CreatePostForm } from '../../components/post/create-post-form/create-post-form.container';

const CreatePostPage = () => (
  <div className="make-post-page">
    <Profile isPost/>
    <CreatePostForm />

  </div>
);

export default CreatePostPage;