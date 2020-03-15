export const GET_FLIGHT_FARE = "GET_FLIGHT_FARE"
export const GET_FLIGHT_FARE_SUCCESS = "GET_FLIGHT_FARE_SUCCESS"
export const GET_FLIGHT_FARE_ERROR = "GET_FLIGHT_FARE_ERROR"


export function getFlightFare(data) {
    
    return {
        type : GET_FLIGHT_FARE,
        url :  'v1/flights/fare',
        data,
        method : "POST",
    }
}
