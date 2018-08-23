import { connect } from 'react-redux';
import PartyPage from '../components/PartyPage/PartyPage';
import { fetchGame } from '../redux/modules/game';

const mapStateToProps = state => ({
  party: state.game.party,
  cacheAttributes: state.modelCache.attributes,
});

const mapDispatchToProps = dispatch => ({
  fetchGameInfo: (gameId, history) => dispatch(fetchGame(gameId, history)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PartyPage);
