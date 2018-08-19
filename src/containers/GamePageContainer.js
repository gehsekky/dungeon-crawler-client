import { connect } from 'react-redux';
import GamePage from '../components/GamePage/GamePage';
import { fetchGame } from '../redux/modules/game';
import { createMove } from '../redux/modules/move';

const mapStateToProps = state => ({
  game: state.game,
  move: state.move,
  room: state.room,
  moves: state.moves,
});

function handleAction(action) {
  return (dispatch, getState) => {
    const state = getState();

    return dispatch(createMove({
      action,
      gameId: state.game.gameId,
      turn: state.move.turn,
    }));
  };
}

const mapDispatchToProps = dispatch => ({
  fetchGameInfo: (gameId, history) => dispatch(fetchGame(gameId, history)),
  handleSubmit: action => dispatch(handleAction(action)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GamePage);
