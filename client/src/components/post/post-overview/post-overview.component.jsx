import React from 'react';

import './post-overview.styles.sass';

import ContentBox from '../../general/content-box/content-box.component';
import Profile from '../../profile/profile/profile.component';
import PostActionBar from '../post-action-bar/post-action-bar.component';
import MoreOptionsIcon from '../../general/more-options-icon/more-options-icon.component';


const PostOverview = ({ body, author: { username, profilePicture} }) => (
  <div className="post">
    <ContentBox>
        <header className="post__header">
          <MoreOptionsIcon 
            iconWrapperClassName="post__more-options"
          />
          <Profile
            isPost 
            username={username} 
            profilePictureUrl={profilePicture} 
          />
        </header>
        <main className="post__body">
          {body}
        </main>
        <footer className="post-footer">
          <PostActionBar />
        </footer>
    </ContentBox>
  </div>
);

export default PostOverview;