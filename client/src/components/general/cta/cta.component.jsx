import React from 'react';

import './cta.styles.sass';

const Cta = ({ Icon, text }) => (
  <div className="cta">
    { Icon ? <Icon /> : null }
    <span className="cta__text">{ text }</span>
  </div>
);

export default Cta;