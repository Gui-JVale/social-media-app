import React from 'react';

import './post-overview.styles.sass';

import ContentBox from '../../general/content-box/content-box.component';
import PostHeader from '../post-header/post-header.component';
import PostBody from '../post-body/post-body.component';
import PostFooter from '../post-footer/post-footer.component';


const Post = () => (
  <div className="post">
    <ContentBox>
        <PostHeader />
        <PostBody />
        <PostFooter />
    </ContentBox>
  </div>
);

export default Post;