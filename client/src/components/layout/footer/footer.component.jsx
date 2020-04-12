import React from 'react';

import './footer.styles.sass';

import { default as MainNav} from '../../../containers/main-nav.container';

const Footer = () => (
  <footer className="footer u-center-text">
    <MainNav />
  </footer>
);

export default Footer;