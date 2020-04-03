import React from 'react';

import './header.styles.sass';

import { ControlPoint } from '@material-ui/icons';

const Header = () => (
  <header className="header">
    <div className="header__box">
      <div className="header__logo-box">
        <h1 className="header__logo-heading"><a href="/" className="header__logo">The Office</a></h1>
      </div>
      <div className="header__icon-box">
        <ControlPoint style={{ fontSize: 50, color: "white"}}/>
      </div>
    </div>
  </header>
);

export default Header;