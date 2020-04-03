import React from 'react';

import './action-bar.styles.sass';

const ActionBarContainer = ({ children }) => (
  <div className="action-bar">
    <div className="action-bar__container u-margin-top-medium">{ children }</div>
  </div>
);

export default ActionBarContainer;