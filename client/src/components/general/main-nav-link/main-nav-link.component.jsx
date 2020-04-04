import React from 'react';
import { Link } from 'react-router-dom';

const MainNavLink = ({ linkName, Icon, url, isMain }) => (
  <Link className={`main-nav__link ${isMain ? "main-nav__link--main" : ""}`} to={url}>
    <Icon style={{ fontSize: "5rem"}}/>
    <span className="main-nav__link-text">{linkName}</span>
  </Link>
);

export default MainNavLink;