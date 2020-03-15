import Immutable from 'immutable';
import { GET_ALL_AIRPORTS, GET_ALL_AIRPORTS_SUCCESS, GET_ALL_AIRPORTS_ERROR } from './../actions/airports.actions'

const initialState = Immutable.fromJS({
    airPorts: [],
    airPortsIsLoading: false,
    airPortsIsError: false
});

function airPortReducer(state = initialState, action) {
    
    switch (action.type) {
        
        case GET_ALL_AIRPORTS:
            return state
                .set('airPortsIsLoading', true)
                .set("airPortsIsError", true)
        case GET_ALL_AIRPORTS_SUCCESS:
            return state
                .set('airPortsIsLoading', false)
                .set('airPortsIsError', false)
                .set("airPorts", action.response)
        case GET_ALL_AIRPORTS_ERROR:
            return state
                .set('airPortsIsLoading', false)
                .set('airPortsIsError', true)
        default:
            return state;
    }
}
export default airPortReducer