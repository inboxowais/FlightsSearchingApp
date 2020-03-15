import Immutable from 'immutable';
import {
    GET_USER_COMPLETED_TICKETS,
    GET_USER_COMPLETED_TICKETS_SUCCESS,
    GET_USER_COMPLETED_TICKETS_ERROR
} from './../actions/user.completed.actions'

const initialState = Immutable.fromJS({
    userCompletedFlights: [],
    userCompletedFlightsLoading: false,
    userCompletedFlightsError: false
});

function getUserCompletedFlights(state = initialState, action) {
    switch (action.type) {
        case GET_USER_COMPLETED_TICKETS:
            
            return state
                .set('userCompletedFlightsLoading', true)
                .set("userCompletedFlightsError", false)
        case GET_USER_COMPLETED_TICKETS_SUCCESS:
           console.log(action.response)
            return state
                .set('userCompletedFlights', action.response)
                .set('userCompletedFlightsError', false)
                .set("userCompletedFlightsLoading", false)
        case GET_USER_COMPLETED_TICKETS_ERROR:
            return state
                .set('userCompletedFlightsError', true)
                .set('userCompletedFlightsLoading', false)
        default:
            return state;
    }
}
export default getUserCompletedFlights