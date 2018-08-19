import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class ActionButton extends React.Component {
  render() {
    const {
      action,
      children,
      handleClick,
    } = this.props;

    return (
      <Button onClick={() => handleClick(action)}>{children}</Button>
    );
  }
}

ActionButton.propTypes = {
  action: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ActionButton;
