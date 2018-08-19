import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ErrorPage.less';

class ErrorPage extends React.Component {
  render() {
    const {
      errors,
    } = this.props;
    return (
      <div>
        {
          errors.map(
            error => <div key={error} className={classNames('alert', 'alert-danger')}>{error}</div>,
          )
        }
        <div className={styles.trailerMessage}>
          <p>something bad happened.</p>
        </div>
      </div>
    );
  }
}

ErrorPage.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ErrorPage;
