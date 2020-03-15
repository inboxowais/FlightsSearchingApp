import Immutable from 'immutable';
import { GET_ALL_FLIGHTS, GET_ALL_FLIGHTS_SUCCESS, GET_ALL_FLIGHTS_ERROR } from './../actions/flights.actions'

const initialState = Immutable.fromJS({
    flights: [],
    flightsLoading: false,
    flightsError: false
});

function searchFlightsReducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_ALL_FLIGHTS:
            return state
                .set('flightsLoading', true)
                .set("flightsError", false)
        case GET_ALL_FLIGHTS_SUCCESS:
        
            return state
                .set('flights', action.response)
                .set('flightsError', false)
                .set("flightsLoading", false)
        case GET_ALL_FLIGHTS_ERROR:
            return state
                .set('flightsError', true)
                .set('flightsLoading',false)
        default:
            return state;
    }
}
export default searchFlightsReducer