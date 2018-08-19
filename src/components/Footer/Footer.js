import React from 'react';
import styles from './Footer.less';

class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        <p>&copy;{ `${new Date().getFullYear()} ${CONFIG.sitename}` }</p>
      </div>
    );
  }
}


export default Footer;
