import React from 'react';

import './main-nav.styles.sass';

import {
  Home,
  Search,
  Add,
  NotificationsNone,
  Person,
} from '@material-ui/icons';
import MainNavLink from '../main-nav-link/main-nav-link.component';

const MainNav = ({ currentUser, notificationsCount }) => (
  <nav className="main-nav">
    <ul className="main-nav__list">
      <li className="main-nav__item">
        <MainNavLink linkName="Home" Icon={Home} url="/" />
      </li>
      <li className="main-nav__item">
        <MainNavLink linkName="Search" Icon={Search} url="/search" />
      </li>
      <li className="main-nav__item">
        <MainNavLink
          linkName="Make a Post"
          Icon={Add}
          url="/create-post"
          isMain
        />
      </li>
      <li className="main-nav__item">
        <MainNavLink
          linkName="Notifications"
          Icon={NotificationsNone}
          url="/notifications"
          notification={notificationsCount}
        />
      </li>
      <li className="main-nav__item">
        <MainNavLink
          linkName="Profile"
          Icon={Person}
          url={`/profile/${currentUser ? currentUser.id : ''}`}
        />
      </li>
    </ul>
  </nav>
);

export default MainNav;
