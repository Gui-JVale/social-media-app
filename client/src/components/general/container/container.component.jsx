import React from 'react';

import './container.styles.sass';

const Container = ({ children}) => (
  <div className="container">
    {children}
  </div>
);

export default Container;