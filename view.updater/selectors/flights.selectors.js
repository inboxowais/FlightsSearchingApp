import { createSelector } from 'reselect';

const getFlights = (state) => state.get('searchFlightsReducer');

const makeSelectFlights = () => createSelector(
    getFlights,
    (getFlights) => getFlights.get('flights')
);
const makeSelectFlightsLoading = () => createSelector(
    getFlights,
    (getFlights) => getFlights.get("flightsLoading")
)
const makeSelectFlightsError = () => createSelector(
    getFlights,
    (getFlights) => getFlights.get("flightsError")
)

export {
    makeSelectFlights,
    makeSelectFlightsLoading,
    makeSelectFlightsError
}

