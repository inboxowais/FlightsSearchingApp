import { createSelector } from 'reselect';

const getFlightTicketPax = (state) => state.get('getFlightTicketPaxReducer');

const makeSelectFlightTicketPax = () => createSelector(
    getFlightTicketPax,
    (getFlightTicketPax) => getFlightTicketPax.get('flightTicketPax')
);
const makeSelectFlightTicketPaxLoading = () => createSelector(
    getFlightTicketPax,
    (getFlightTicketPax) => getFlightTicketPax.get("flightTicketPaxLoading")
)
const makeSelectFlightTicketPaxError = () => createSelector(
    getFlightTicketPax,
    (getFlightTicketPax) => getFlightTicketPax.get("flightTicketPaxError")
)

export {
    makeSelectFlightTicketPax,
    makeSelectFlightTicketPaxLoading,
    makeSelectFlightTicketPaxError
}

