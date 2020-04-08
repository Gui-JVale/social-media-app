import React from 'react';

import PostOverview from '../../components/post/post-overview/post-overview.component';

const Feed = ({ posts }) => (
  <div className="feed">
    {posts.map(({id, body, author, ...rest}) => <PostOverview key={id} body={body} author={author} {...rest}/>)}
  </div>
);

export default Feed;