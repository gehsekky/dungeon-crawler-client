import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import 'whatwg-fetch';
import LandingPage from '../components/LandingPage/LandingPage';
import { createGame } from '../redux/modules/game';

const mapStateToProps = () => ({

});

const mapDispatchToProps = dispatch => ({
  handleSubmit: history => dispatch(createGame(history)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage));
