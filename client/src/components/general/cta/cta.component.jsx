import React from 'react';
import { Link, withRouter } from 'react-router-dom'


import './cta.styles.sass';

const Cta = ({ Icon, text, onClick, isActive, link }) => (
  <div className={`cta ${isActive ? "cta--active" : ""}`} onClick={onClick}>
    {link ? (
      <Link to={link}>
        { Icon ? <Icon /> : null }
        <span className="cta__text">{ text }</span>
      </Link>
    ) : (
      <div>
        { Icon ? <Icon /> : null }
        <span className="cta__text">{ text }</span>
      </div>
    )}
  </div>
);

export default withRouter(Cta);