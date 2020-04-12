import React from 'react';

import Profile from '../../components/profile/profile/profile.component';
import { default as CreatePostForm } from '../../containers/create-post-form.container';
import { default as EditPostForm } from '../../containers/edit-post-form.container';

const SubmitPostPage = ({ match }) => (
  <div className="make-post-page">
    <Profile isPost/>
    { match.params.postId ? <EditPostForm /> : <CreatePostForm /> }
  </div>
);

export default SubmitPostPage;