import React from 'react';

import './cta.styles.sass';

const Cta = ({ Icon, text, onClick, isActive }) => (
  <div className={`cta ${isActive ? "cta--active" : ""}`} onClick={onClick}>
    { Icon ? <Icon /> : null }
    <span className="cta__text">{ text }</span>
  </div>
);

export default Cta;