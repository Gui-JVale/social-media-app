import React from 'react';

import { ThumbUpAlt, ChatBubbleOutline, KeyboardTab } from '@material-ui/icons'

import ActionBarContainer from '../../general/action-bar/action-bar.component';
import Cta from '../../general/cta/cta.component';

const PostActionBar = () => {
  return (
    <div className="post__action-bar">
      <ActionBarContainer>
        <Cta 
          Icon={ThumbUpAlt}
          text="Like"
        />
        <Cta 
          Icon={ChatBubbleOutline}
          text="Comment"
        />
        <Cta 
          Icon={KeyboardTab}
          text="Share"
        />
      </ActionBarContainer>
    </div>
  )
};

export default PostActionBar;