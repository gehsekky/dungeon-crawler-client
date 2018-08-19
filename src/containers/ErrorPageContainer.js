import { connect } from 'react-redux';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const mapStateToProps = () => ({
  errors: ['something wrong goin on'],
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErrorPage);
