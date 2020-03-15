import Immutable from 'immutable';
import { ADD_USER, ADD_USER_SUCCESS, ADD_USER_ERROR } from './../actions/add.user.actions'

const initialState = Immutable.fromJS({
    addUser: [],
    addUserLoading: false,
    addUserError: false
});

function addUserReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_USER:
            return state
                .set('addUserLoading', true)
                .set("addUserError", true)
        case ADD_USER_SUCCESS:
           
            return state
                .set('addUserLoading', false)
                .set('addUserError', false)
                .set("addUser", action.response)
        case ADD_USER_ERROR:
            return state
                .set('addUserLoading', false)
                .set('addUserError', true)
        default:
            return state;
    }
}
export default addUserReducer