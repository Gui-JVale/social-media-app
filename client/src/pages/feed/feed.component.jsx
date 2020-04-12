import React from 'react';

import { default as Post } from '../../containers/post.container';

const Feed = ({ posts }) => (
  <div className="feed">
    {posts.map(({id, ...rest}) => 
      <Post key={id} postId={id} {...rest}/>)}
  </div>
);

export default Feed;