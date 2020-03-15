import Immutable from 'immutable';
import {
    REGISTER_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
    GET_INDENT,
    GET_INDENT_ERROR,
    GET_INDENT_SUCCESS,
    VERIFY_OTP,
    VERIFY_OTP_ERROR,
    VERIFY_OTP_SUCCESS,
    CREATE_LOGIN,
    CREATE_LOGIN_ERROR,
    CREATE_LOGIN_SUCCESS
} from './../actions/register.user.actions'

const initialState = Immutable.fromJS({
    registerUser: [],
    registerUserLoading: false,
    registerUserError: false,
    indent: [],
    indentLoading: false,
    indentError: false,
    verifyOtp: [],
    verifyOtpLoading: false,
    verifyOtpError: false,
    createLogin: [],
    createLoginError: false,
    createLoginLoading: false
});

function registerUserReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER:
            return state
                .set('registerUserLoading', true)
                .set("registerUserError", false)
        case REGISTER_USER_SUCCESS:
            console.log(action.response)
            return state
                .set('registerUser', action.response)
                .set('registerUserError', false)
                .set("registerUserLoading", false)
        case REGISTER_USER_ERROR:
            return state
                .set('registerUserError', true)
                .set('registerUserLoading', false)
        case GET_INDENT:
            return state
                .set('indentLoading', true)
                .set("indentError", false)
        case GET_INDENT_SUCCESS:
            console.log(action.response)
            return state
                .set('indent', action.response)
                .set('indentError', false)
                .set("indentLoading", false)
        case GET_INDENT_ERROR:
            return state
                .set('indentError', true)
                .set('indentLoading', false)

        case VERIFY_OTP:
            return state
                .set('verifyOtpLoading', true)
                .set("verifyOtpError", false)
        case VERIFY_OTP_SUCCESS:
            console.log(action.response)
            return state
                .set('verifyOtp', action.response)
                .set('verifyOtpError', false)
                .set("verifyOtpLoading", false)
        case VERIFY_OTP_ERROR:
            return state
                .set('verifyOtpError', true)
                .set('verifyOtpLoading', false)

        case CREATE_LOGIN:
            return state
                .set('createLoginLoading', true)
                .set("createLoginError", false)
        case CREATE_LOGIN_SUCCESS:
            console.log(action.response)
            return state
                .set('createLogin', action.response)
                .set('createLoginError', false)
                .set("createLoginLoading", false)
        case CREATE_LOGIN_ERROR:
            return state
                .set('createLoginError', true)
                .set('createLoginLoading', false)
        default:
            return state;
    }
}
export default registerUserReducer