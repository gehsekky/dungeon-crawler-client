import React from 'react';
import PropTypes from 'prop-types';
import styles from './LandingPage.less';

class LandingPage extends React.Component {
  render() {
    const {
      handleSubmit,
      history,
    } = this.props;

    return (
      <div className={styles.landing}>
        <input type="button" value="create game" onClick={() => handleSubmit(history)} />
      </div>
    );
  }
}

LandingPage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default LandingPage;
