import { combineReducers } from 'redux-immutable';
import appReducer from './app.reducer'
import authReducer from './auth.reducers';
import airPortReducer from './airports.reducers';
import flightsDataReducer from './flights.data.reducer'
import searchFlightsReducer from './flights.reducers'
import selectFlightReducer from './flights.select.reducers'
import flightFareReducer from './flights.fare.reducers'
import getFlightTicketPaxReducer from './flights.ticket.pax.reducers'
import addUserReducer from './add.user.reducer'
import blockTicketReducer from './block.ticket.reducer'
import getPaymentConfig from './payment.config.reducer'
import getUserUpcomingTicketsReducer from './users.upcoming.tickets.reducer'
import getUserCompletedFlights from './user.completed.reducers'
import getUsersCancelledTicketsReducer from './users.cancelled.tickets.reducers'
import registerUserReducer from './register.user.reducer'

export default function createReducer() {
    return combineReducers({
        appReducer,
        authReducer,
        airPortReducer,
        flightsDataReducer,
        searchFlightsReducer,
        selectFlightReducer,
        flightFareReducer,
        getFlightTicketPaxReducer,
        addUserReducer,
        blockTicketReducer,
        getPaymentConfig,
        getUserUpcomingTicketsReducer,
        getUserCompletedFlights,
        getUsersCancelledTicketsReducer,
        registerUserReducer
    })
}