import Immutable from 'immutable';
import { GET_FLIGHT_FARE,GET_FLIGHT_FARE_SUCCESS,GET_FLIGHT_FARE_ERROR } from './../actions/flights.fare.actions'

const initialState = Immutable.fromJS({
    flightsFare: [],
    flightsFareLoading: false,
    flightsFareError: false
});

function flightFareReducer(state = initialState, action) {
    
    switch (action.type) {
        case GET_FLIGHT_FARE:
            return state
                .set('flightsFareLoading', true)
                .set("flightsFareError", false)
        case GET_FLIGHT_FARE_SUCCESS:
            return state
                .set('flightsFare', action.response)
                .set('flightsFareError', false)
                .set("flightsFareLoading", false)
        case GET_FLIGHT_FARE_ERROR:
            return state
                .set('flightsFareError', true)
                .set('flightsFareLoading',false)
        default:
            return state;
    }
}
export default flightFareReducer