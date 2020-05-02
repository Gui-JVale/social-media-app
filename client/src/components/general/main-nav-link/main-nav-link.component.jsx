import React from 'react';
import { Link } from 'react-router-dom';

const MainNavLink = ({ linkName, Icon, url, isMain, notification }) => (
  <Link
    className={`main-nav__link ${isMain ? 'main-nav__link--main' : ''}`}
    to={url}
  >
    <Icon style={{ fontSize: '5rem' }} />
    <span className="main-nav__link-text">{linkName}</span>
    {notification && notification > 0 ? (
      <span className="main-nav__notification-background">
        <span className="main-nav__notification">{notification}</span>
      </span>
    ) : null}
  </Link>
);

export default MainNavLink;
