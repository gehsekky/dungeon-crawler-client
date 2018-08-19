import { connect } from 'react-redux';
import Navbar from '../components/Navbar/Navbar';

const mapStateToProps = state => ({
  gameId: state.game.gameId,
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);
