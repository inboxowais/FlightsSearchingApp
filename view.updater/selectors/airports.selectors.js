import { createSelector } from 'reselect';

const selectAirPorts = (state) => state.get('airPortReducer');

const makeSelectAirPorts = () => createSelector(
    selectAirPorts,
    (selectAirPorts) => selectAirPorts.get('airPorts')
);
const makeSelectAirPortsLoading = () => createSelector(
    selectAirPorts,
    (selectAirPorts) => selectAirPorts.get("airPortsIsLoading")
)
const makeSelectAirPortsError = () => createSelector(
    selectAirPorts,
    (selectAirPorts) => selectAirPorts.get("airPortsIsError")
)

export {
    makeSelectAirPorts,
    makeSelectAirPortsLoading,
    makeSelectAirPortsError
}

