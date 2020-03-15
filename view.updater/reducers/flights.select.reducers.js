import Immutable from 'immutable';
import { SELECT_FLIGHT, SELECT_FLIGHT_SUCCESS, SELECT_FLIGHT_ERROR } from './../actions/flight.select.actions'

const initialState = Immutable.fromJS({
    selectFlight: [],
    selectFlightLoading: false,
    selectFlightError: false
});

function selectFlightReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_FLIGHT:

            return state
                .set('selectFlightLoading', true)
                .set("selectFlightError", false)
        case SELECT_FLIGHT_SUCCESS:
            return state
                .set('selectFlight', action.response)
                .set('selectFlightError', false)
                .set("selectFlightLoading", false)
        case SELECT_FLIGHT_ERROR:
            return state
                .set('selectFlightError', true)
                .set('selectFlightLoading', false)
        default:
            return state;
    }
}
export default selectFlightReducer