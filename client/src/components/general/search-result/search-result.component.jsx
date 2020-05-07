import React from 'react';

import Profile from '../../profile/profile/profile.component';
import ContentBox from '../content-box/content-box.component';
import Post from '../../post/post/post.component';

const SearchResult = ({ type, result }) => {
  switch (type) {
    case 'USER':
      return (
        <div className="search-result search-result--user">
          <ContentBox>
            <Profile
              isPost
              small
              userId={result.id}
              picture={result.picture}
              username={result.username}
            />
          </ContentBox>
        </div>
      );
    case 'POST':
      const { author, body, id } = result;
      return (
        <div className="search-result search-result--post">
          <Post postId={id} body={body} author={author} dropdownHidden />
        </div>
      );
    default:
      return null;
  }
};

export default SearchResult;
