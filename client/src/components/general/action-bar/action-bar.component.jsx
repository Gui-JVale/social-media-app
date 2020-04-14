import React from 'react';

import './action-bar.styles.sass';

const ActionBar = ({ children }) => (
  <div className="action-bar">
    {/* Children are meant to be a CTA component */}
    <div className="action-bar__container u-margin-top-medium">{ children }</div>
  </div>
);

export default ActionBar;