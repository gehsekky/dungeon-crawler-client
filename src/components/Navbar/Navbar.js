import React from 'react';
import PropTypes from 'prop-types';
import { Navbar as ReactNavbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navbar extends React.Component {
  render() {
    const {
      gameId,
    } = this.props;

    const linkContainers = [{ path: '/', name: 'new game' }];
    if (gameId) {
      linkContainers.push({ path: `/game/${gameId}`, name: 'current game' });
      linkContainers.push({ path: `/game/${gameId}/party`, name: 'party' });
    }

    return (
      <ReactNavbar>
        <ReactNavbar.Header>
          <ReactNavbar.Brand>
            <a href="/">{CONFIG.sitename}</a>
          </ReactNavbar.Brand>
        </ReactNavbar.Header>
        <Nav>
          {
            linkContainers.map((linkContainer, i) => (
              <LinkContainer to={linkContainer.path} exact key={linkContainer.name}>
                <NavItem eventKey={i + 1}>{linkContainer.name}</NavItem>
              </LinkContainer>
            ))
          }
        </Nav>
      </ReactNavbar>
    );
  }
}

Navbar.propTypes = {
  gameId: PropTypes.string,
};

Navbar.defaultProps = {
  gameId: '',
};

export default Navbar;
