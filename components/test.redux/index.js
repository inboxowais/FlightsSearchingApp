import TestRedux from './test.redux';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { testAction, getUsers } from './../../view.updater/actions/app.actions';
import { makeSelectTest, makeSelectUsers, makeSelectUsersError, makeSelectUsersLoading } from './../../view.updater/selectors/app.selectors'

const mapDispatchToProps = (dispatch) => ({
    testAction: () => dispatch(testAction()),
    getUsers: () => dispatch(getUsers())
});

const mapStateToProps = createStructuredSelector({
    test: makeSelectTest(),
    users: makeSelectUsers(),
    usersLoading: makeSelectUsersLoading(),
    usersError: makeSelectUsersError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(TestRedux);