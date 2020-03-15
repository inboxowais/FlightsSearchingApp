import Immutable from 'immutable';
import {
    GET_USERS_CANCELLED_TICKETS,
    GET_USERS_CANCELLED_TICKETS_ERROR,
    GET_USERS_CANCELLED_TICKETS_SUCCESS
} from './../actions/users.cancalled.tickets.actions'

const initialState = Immutable.fromJS({
    usersCancelledTicket: [],
    usersCancelledTicketsError: false,
    usersCancelledTIcketsLoading: false
});

function getUsersCancelledTicketsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_CANCELLED_TICKETS:
            
            return state
                .set('usersCancelledTIcketsLoading', true)
                .set("usersCancelledTicketsError", false)
        case  GET_USERS_CANCELLED_TICKETS_SUCCESS:
            
           console.log(action.response)
            return state
                .set('usersCancelledTicket', action.response)
                .set('usersCancelledTicketsError', false)
                .set("usersCancelledTIcketsLoading", false)
        case GET_USERS_CANCELLED_TICKETS_ERROR:
            return state
                .set('usersCancelledTicketsError', true)
                .set('usersCancelledTIcketsLoading', false)
        default:
            return state;
    }
}
export default getUsersCancelledTicketsReducer