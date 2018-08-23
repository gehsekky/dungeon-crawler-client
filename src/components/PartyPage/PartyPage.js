import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import styles from './PartyPage.less';

class PartyPage extends React.Component {
  componentDidMount() {
    const {
      fetchGameInfo,
      history,
      party,
    } = this.props;

    if (!party || !party.length) {
      const gameId = window.location.href.replace(/^.*?\/game\//i, '').replace(/\/party/i, '');
      fetchGameInfo(gameId, history);
    }
  }

  render() {
    const {
      party,
    } = this.props;

    return (
      <div className={styles.partyPage}>
        <Grid fluid>
          <Row>
            <Col>
              <div className="d-flex">
                {
                  party.map(partyMember => (
                    <Panel key={partyMember.partyMemberId} className={styles.partyMemberContainer}>
                      <Panel.Heading className={styles.partyMemberHeading}>
                        {partyMember.name}
                      </Panel.Heading>
                      <Panel.Body>
                        <h4><b>attributes</b></h4>
                        {
                          partyMember.attributes.map(attr => (
                            <p key={attr.attributeId}>
                              {attr.attribute.name}: {attr.value}
                            </p>
                          ))
                        }
                      </Panel.Body>
                    </Panel>
                  ))
                }
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

PartyPage.propTypes = {
  fetchGameInfo: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  party: PropTypes.array.isRequired,
};

export default PartyPage;
