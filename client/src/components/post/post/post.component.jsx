import React from 'react';

import './post.styles.sass';

import ContentBox from '../../general/content-box/content-box.component';
import Profile from '../../profile/profile/profile.component';
import { default as PostActionBar } from '../../../containers/post-action-bar.container';
import MoreOptionsIcon from '../../general/more-options-icon/more-options-icon.component';
import { default as PostOptionsDropdown}  from '../../../containers/post-options-dropdown.container';


const Post = (post) => {
  const { 
    postId, 
    body, 
    author, 
    likesCount, 
    commentsCount, 
    currentUserId, 
    dropdownHidden, 
    isLikedByCurrentUser, 
    toggleDropdownHidden 
  } = post;
  return (
    <div className="post">
       <ContentBox>
          <header className="post__header">

            {author.id === currentUserId ? (
              <MoreOptionsIcon 
                iconWrapperClassName="post__more-options"
                style={{ fontSize: 20 }}
                onClick={toggleDropdownHidden}
              />
            ) : null}

            <Profile
              isPost 
              userId={author.id}
              username={author.username} 
              picture={author.profilePicture} 
            />

            <PostOptionsDropdown isHidden={dropdownHidden} postId={postId}/>

          </header>

          <main className="post__body">
            {body}
          </main>

          <footer className="post-footer u-margin-top-medium">
            <div className="post__metrics">
              {likesCount} Likes and {commentsCount} Comments
            </div>
            <PostActionBar 
              postId={postId} 
              isLikedByCurrentUser={isLikedByCurrentUser}
            />
          </footer>

      </ContentBox>
    </div>
  )
};

export default Post;