import { createSelector } from 'reselect';

const getFlightFare = (state) => state.get('flightFareReducer');

const makeSelectFlightFare = () => createSelector(
    getFlightFare,
    (getFlightFare) => getFlightFare.get('flightsFare')
);
const makeSelectFlightFareLoading = () => createSelector(
    getFlightFare,
    (getFlightFare) => getFlightFare.get("flightsFareLoading")
)
const makeSelectFlightFareError = () => createSelector(
    getFlightFare,
    (getFlightFare) => getFlightFare.get("flightsFareError")
)

export {
    makeSelectFlightFare,
    makeSelectFlightFareLoading,
    makeSelectFlightFareError
}

