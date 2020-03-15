import Immutable from 'immutable';
import {
    GET_USER_UPCOMING_TICKETS,
    GET_USER_UPCOMING_TICKETS_ERROR,
    GET_USER_UPCOMING_TICKETS_SUCCESS
} from './../actions/user.upcoming.tickets.actions'

const initialState = Immutable.fromJS({
    userUpcomingTickets: [],
    userUpcomingTicketsLoading: false,
    userUpcomingTicketsError: false
});

function getUserUpcomingTicketsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_UPCOMING_TICKETS:
            
            return state
                .set('userUpcomingTicketsLoading', true)
                .set("userUpcomingTicketsError", false)
        case GET_USER_UPCOMING_TICKETS_SUCCESS:
            
           console.log(action.response)
            return state
                .set('userUpcomingTickets', action.response)
                .set('userUpcomingTicketsError', false)
                .set("userUpcomingTicketsLoading", false)
        case GET_USER_UPCOMING_TICKETS_ERROR:
            return state
                .set('userUpcomingTicketsError', true)
                .set('userUpcomingTicketsLoading', false)
        default:
            return state;
    }
}
export default getUserUpcomingTicketsReducer