import Main from './main';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectAuthResponse} from './../../view.updater/selectors/auth.selectors'

const mapDispatchToProps = (dispatch) => ({
   
});

const mapStateToProps = createStructuredSelector({
 
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Main);