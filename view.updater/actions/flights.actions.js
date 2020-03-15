export const GET_ALL_FLIGHTS = "GET_ALL_FLIGHTS"
export const GET_ALL_FLIGHTS_SUCCESS = "GET_ALL_FLIGHTS_SUCCESS"
export const GET_ALL_FLIGHTS_ERROR = "GET_ALL_FLIGHTS_ERROR"


export function searchFlights(data) {
    
    return {
        type : GET_ALL_FLIGHTS,
        url :  'v1/flights/search',
        data,
        method : "POST",
    }
}
