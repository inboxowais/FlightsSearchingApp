import { createSelector } from 'reselect';

const getSelectedFlight = (state) => state.get('selectFlightReducer');

const makeGetSelectedFlight = () => createSelector(
    getSelectedFlight,
    (getSelectedFlight) => getSelectedFlight.get('selectFlight')
);
const makeGetSelectedLoading = () => createSelector(
    getSelectedFlight,
    (getSelectedFlight) => getSelectedFlight.get("selectFlightLoading")
)
const makeGetSelectedFlightError = () => createSelector(
    getSelectedFlight,
    (getSelectedFlight) => getSelectedFlight.get("selectFlightError")
)

export {
    makeGetSelectedFlight,
    makeGetSelectedLoading,
    makeGetSelectedFlightError
}

