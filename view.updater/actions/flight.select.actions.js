export const SELECT_FLIGHT = "SELECT_FLIGHT"
export const SELECT_FLIGHT_SUCCESS = "SELECT_FLIGHT_SUCCESS"
export const SELECT_FLIGHT_ERROR = "SELECT_FLIGHT_ERROR"


export function selectFlight(data) {
    return {
        type: SELECT_FLIGHT,
        url: 'v1/flights/select',
        data,
        method: "POST",
    }
}
