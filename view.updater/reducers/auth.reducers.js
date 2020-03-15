import Immutable from 'immutable';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from './../actions/auth.actions'
import { AsyncStorage } from 'react-native';
import { setToken,setUserId } from './../../containers/common/utils/utils'

const initialState = Immutable.fromJS({
    loginInResponse: null,
    loginLoading: false,
    loginError: false
});

function authReducer(state = initialState, action) {

    switch (action.type) {
        case LOGIN:
            
            return state
                .set('loginLoading', true)
                .set("loginError", false)
        case LOGIN_SUCCESS:
            setUserId(action.response.User.UserId)   
            setToken(action.response.AuthToken)
            return state
                .set('loginInResponse', action.response)
                .set('loginLoading', false)
                .set("loginError", false)
        case LOGIN_ERROR:
            return state
                .set('loginError', true)
                .set('loginLoading', false)
        default:
            return state;
    }
}
export default authReducer