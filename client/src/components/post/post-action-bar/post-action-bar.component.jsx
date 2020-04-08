import React from 'react';

import { ThumbUpAlt, ChatBubbleOutline, KeyboardTab } from '@material-ui/icons'

import ActionBar from '../../general/action-bar/action-bar.component';
import Cta from '../../general/cta/cta.component';

const PostActionBar = () => {
  return (
    <div className="post__action-bar">
      <ActionBar>
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
      </ActionBar>
    </div>
  )
};

export default PostActionBar;