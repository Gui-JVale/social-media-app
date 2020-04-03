import React from 'react';

import ProfilePreview from '../../profile/profile-preview/profile-preview.component';


const PostHeader = () => (
  <header className="post__header">
    <ProfilePreview isPost />
  </header>
);

export default PostHeader;