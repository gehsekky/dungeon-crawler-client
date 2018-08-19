import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup } from 'react-bootstrap';

class ActionBar extends React.Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <ButtonGroup>
        {children}
      </ButtonGroup>
    );
  }
}

ActionBar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ActionBar;
