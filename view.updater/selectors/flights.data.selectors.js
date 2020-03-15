import { createSelector } from 'reselect';

const selectFlightData = (state) => state.get('flightsDataReducer');

const makeSelectSource = () => createSelector(
    selectFlightData,
    (selectFlightData) => selectFlightData.get('source')
);

const makeSelectDestination = () => createSelector(
    selectFlightData,
    (selectFlightData) => selectFlightData.get('destination')
)

const makeSelectpickUpDate = () => createSelector(
    selectFlightData,
    (selectFlightData) => selectFlightData.get('pickUpDate')
)

const makeSelectDropDate = () => createSelector(
    selectFlightData,
    (selectFlightData) => selectFlightData.get('dropDate')
)

const makeSelectClass = () => createSelector(
    selectFlightData,
    (selectFlightData) => selectFlightData.get('class')
)

const makeSelectAdults = () => createSelector(
    selectFlightData,
    (selectFlightData) => selectFlightData.get('adults')
)

const makeSelectChildren = () => createSelector(
    selectFlightData,
    (selectFlightData) => selectFlightData.get('childrens')
)

const makeSelectInfants = () => createSelector(
    selectFlightData,
    (selectFlightData) => selectFlightData.get('infants')
)
 
export {
    makeSelectSource,
    makeSelectDestination,
    makeSelectpickUpDate,
    makeSelectDropDate,
    makeSelectClass,
    makeSelectAdults,
    makeSelectChildren,
    makeSelectInfants
}

