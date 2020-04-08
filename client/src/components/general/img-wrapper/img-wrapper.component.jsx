import React from 'react';

import './img-wrapper.styles.sass';

const ImgWrapper = ({ children, circle, big }) => (
  <div className={`img-wrapper ${ circle ? "img-wrapper--circle" : ""} ${ big ? "img-wrapper--big" : "" }`}>
    { children }
  </div>
);

export default ImgWrapper;