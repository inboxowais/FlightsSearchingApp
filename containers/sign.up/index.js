import SignUp from './sign.up';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { register, getIndent, verifyOtp, createLogin } from './../../view.updater/actions/register.user.actions'
import {
    makeSelectRegisterUserError,
    makeSelectRegisterUserLoading,
    makeSelecterRegisterUser,
    makeSelecterIndent,
    makeSelectIndentLoading,
    makeSelectIndentError,
    makeSelectVerifyOtp,
    makeSelectVerifyOtpLoading,
    makeSelectVerifyOtpError,
    makeSelectCreateLogin,
    makeSelectCreateLoginError,
    makeSelectCreateLoginLoading
} from './../../view.updater/selectors/register.user.selectors'


const mapDispatchToProps = (dispatch) => ({
    register: (data) => dispatch(register(data)),
    getIndent: (data) => dispatch(getIndent(data)),
    verifyOtp: (data) => dispatch(verifyOtp(data)),
    createLogin: (data) => dispatch(createLogin(data))
});

const mapStateToProps = createStructuredSelector({
    registerUser: makeSelecterRegisterUser(),
    registerUserLoading: makeSelectRegisterUserLoading(),
    registerUserError: makeSelectRegisterUserError(),
    indent: makeSelecterIndent(),
    indentError: makeSelectIndentError(),
    indentLoading: makeSelectIndentLoading(),
    Otp: makeSelectVerifyOtp(),
    verifyOtpError: makeSelectVerifyOtpError(),
    verifyOtpLoading: makeSelectVerifyOtpLoading(),
    loginUser : makeSelectCreateLogin(),
    loginUserLoading:makeSelectCreateLoginLoading(),
    loginUserError : makeSelectCreateLoginError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(SignUp);