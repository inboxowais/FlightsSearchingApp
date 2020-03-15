import { createSelector } from 'reselect';

const getUserCompletedFlights = (state) => state.get('getUserCompletedFlights');

const makeSelectCompletedFlights = () => createSelector(
    getUserCompletedFlights,
    (getUserCompletedFlights) => getUserCompletedFlights.get('userCompletedFlights')
);
const makeSelectCompletedFlightsLoading = () => createSelector(
    getUserCompletedFlights,
    (getUserCompletedFlights) => getUserCompletedFlights.get("userCompletedFlightsLoading")
)
const makeSelectCompletedFlightsError = () => createSelector(
    getUserCompletedFlights,
    (getUserCompletedFlights) => getUserCompletedFlights.get("userCompletedFlightsError")
)

export {
    makeSelectCompletedFlights,
    makeSelectCompletedFlightsLoading,
    makeSelectCompletedFlightsError
}

