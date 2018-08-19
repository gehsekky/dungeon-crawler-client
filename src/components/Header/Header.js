import React from 'react';
import NavbarContainer from '../../containers/NavbarContainer';
import styles from './Header.less';

const Header = () => (
  <div className={styles.header}>
    <h1>{ CONFIG.sitename }</h1>
    <NavbarContainer />
  </div>
);

export default Header;
