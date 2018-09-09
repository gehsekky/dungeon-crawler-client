import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import ActionBar from '../ActionBar/ActionBar';
import ActionButton from '../ActionButton/ActionButton';
import styles from './GamePage.less';

class GamePage extends React.Component {
  componentDidMount() {
    const {
      fetchGameInfo,
      game,
      history,
    } = this.props;

    if (!game.gameId) {
      const gameId = window.location.href.replace(/^.*?\/game\//i, '');
      fetchGameInfo(gameId, history);
    }
  }

  render() {
    const {
      game,
      handleSubmit,
      move,
      moves,
      room,
    } = this.props;

    if (!game.gameId || !room.roomId) return null;

    return (
      <div className={styles.gamePage}>
        <Grid fluid>
          <Row>
            <Col sm={3} md={4} className={styles.leftnav}>
              <Panel>
                <Panel.Heading>game</Panel.Heading>
                <Panel.Body>
                  <div>
                    (x, y): ({room.location && room.location.x}, {room.location && room.location.y})
                  </div>
                  <div>turn: {move.turn}</div>
                  <div>room type: {room.type}</div>
                </Panel.Body>
              </Panel>
              <Panel>
                <Panel.Heading>party</Panel.Heading>
                <Panel.Body>
                  {
                    game.party && game.party.map(partyMember => (
                      <div key={partyMember.name}>{partyMember.name}</div>
                    ))
                  }
                </Panel.Body>
              </Panel>
            </Col>
            <Col sm={9} md={8} className={styles.content}>
              <Panel>
                <Panel.Heading>moves</Panel.Heading>
                <Panel.Body style={{ height: '300px', overflowY: 'auto' }}>
                  {
                    moves.map(m => (
                      <div key={m.moveId} className={styles.moveContainer}>
                        <p>turn: {m.turn}</p>
                        <p>action: {m.action}</p>
                        <p>storyBase: {m.storyBase}</p>
                        <p>(x, y): ({m.room.location.x}, {m.room.location.y})</p>
                      </div>
                    ))
                  }
                </Panel.Body>
              </Panel>

              <div className={styles.buttonContainer}>
                <ActionBar>
                  {
                    ['north', 'south', 'east', 'west'].map(action => (
                      <ActionButton
                        key={action}
                        action={action}
                        handleClick={() => handleSubmit(action)}
                      >
                        {action}
                      </ActionButton>
                    ))
                  }
                </ActionBar>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

GamePage.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  fetchGameInfo: PropTypes.func.isRequired,
  game: PropTypes.shape({
    gameId: PropTypes.number,
    turn: PropTypes.number,
  }),
  move: PropTypes.shape({
    moveId: PropTypes.number,
    gameId: PropTypes.number,
    roomId: PropTypes.number,
    action: PropTypes.string,
    storyBase: PropTypes.string,
    turn: PropTypes.number,
  }).isRequired,
  moves: PropTypes.array.isRequired,
  room: PropTypes.object.isRequired,
};

GamePage.defaultProps = {
  game: null,
};

export default GamePage;
