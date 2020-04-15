import React from 'react';

import './cta.styles.sass';

const Cta = ({ Icon, text, onClick }) => (
  <div className="cta" onClick={onClick}>
    { Icon ? <Icon /> : null }
    <span className="cta__text">{ text }</span>
  </div>
);

export default Cta;