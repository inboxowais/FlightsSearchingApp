import Immutable from 'immutable';
import { SET_SOURCE, SET_DESTINATION, SET_PICK_DATE, SET_DROP_DATE, SET_ADULTS, SET_CHILDREN, SET_INFANTS, SET_CLASS } from './../actions/flights.data.actions'

const initialState = Immutable.fromJS({
    source: "",
    destination: "",
    pickUpDate: "",
    dropDate: "",
    class: "",
    adults: "",
    childrens: "",
    infants:""
});

function flightsDataReducer(state = initialState, action) {

    switch (action.type) {
        case SET_SOURCE:
            return state
                .set('source', action.data)
        case SET_DESTINATION:
            return state
                .set('destination', action.data)
        case SET_PICK_DATE:
            return state
                .set('pickUpDate', action.data)
        case SET_DROP_DATE:
            return state
                .set('dropDate', action.data)
        case SET_ADULTS:
            return state
                .set('adults', action.data)
        case SET_CHILDREN:
            return state
                .set('childrens', action.data)
        case SET_INFANTS:
            return state
                .set('infants', action.data)
        case SET_CLASS:
            return state
                .set('class', action.data)

        default:
            return state;
    }
}
export default flightsDataReducer