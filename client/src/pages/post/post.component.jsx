import React from 'react';
import { Route } from 'react-router-dom';
import {default as CommentsSection} from '../../containers/comments-section.container';
import SubmitPostPage from '../submit-post/submit-post.component';
import Feed from '../feed/feed.component';

const PostPage = ({ match }) => (
  <div className="post-page">
    <Route exact path={`${match.path}`} component={Feed} />
    <Route  path={`${match.path}/edit`} component={SubmitPostPage} />
    <Route  path={`${match.path}/comments`} component={CommentsSection} />
  </div>
);

export default PostPage;