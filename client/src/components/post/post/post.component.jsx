import React from 'react';

import './post.styles.sass';

import ContentBox from '../../general/content-box/content-box.component';
import Profile from '../../profile/profile/profile.component';
import PostActionBar from '../post-action-bar/post-action-bar.component';
import MoreOptionsIcon from '../../general/more-options-icon/more-options-icon.component';
import { default as PostOptionsDropdown}  from '../post-options-dropdown/post-options-dropdown.container';


const Post = ({ postId, body, author, currentUserId, dropdownHidden, toggleDropdownHidden }) => {
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
              username={author.username} 
              profileImgUrl={author.profilePicture} 
            />

            <PostOptionsDropdown isHidden={dropdownHidden} postId={postId}/>

          </header>

          <main className="post__body">
            {body}
          </main>

          <footer className="post-footer">
            <PostActionBar />
          </footer>

      </ContentBox>
    </div>
  )
};

export default Post;