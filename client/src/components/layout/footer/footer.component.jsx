import React from 'react';

import './footer.styles.sass';

import { default as MainNav} from '../../general/main-nav/main-nav.container';

const Footer = () => (
  <footer className="footer u-center-text">
    <MainNav />
  </footer>
);

export default Footer;