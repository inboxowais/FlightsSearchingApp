import Immutable from 'immutable';
import {
    GET_FLIGHT_TICKET_PAX,
    GET_FLIGHT_TICKET_PAX_SUCCESS,
    GET_FLIGHT_TICKET_PAX_ERROR
} from './../actions/flights.ticket.pax.actions'

const initialState = Immutable.fromJS({
    flightTicketPax: [],
    flightTicketPaxLoading: false,
    flightTicketPaxError: false
});

function getFlightTicketPaxReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FLIGHT_TICKET_PAX:
            return state
                .set('flightTicketPaxLoading', true)
                .set("flightTicketPaxError", false)
        case GET_FLIGHT_TICKET_PAX_SUCCESS:
            return state
                .set('flightTicketPax', action.response)
                .set('flightTicketPaxError', false)
                .set("flightTicketPaxLoading", false)
        case GET_FLIGHT_TICKET_PAX_ERROR:
            return state
                .set('flightTicketPaxError', true)
                .set('flightTicketPaxLoading', false)
        default:
            return state;
    }
}
export default getFlightTicketPaxReducer