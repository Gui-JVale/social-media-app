import React from 'react';

import './content-box.styles.sass';

const ContentBox = ({ children }) => (
  <div className="content-box">
    {children}
  </div>
);

export default ContentBox;