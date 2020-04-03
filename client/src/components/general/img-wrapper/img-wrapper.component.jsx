import React from 'react';

import './img-wrapper.styles.sass';

const ImgWrapper = ({ children, circle }) => (
  <div className={`img-wrapper ${ circle ? "img-wrapper--circle" : ""}`}>
    { children }
  </div>
);

export default ImgWrapper;