export const GET_FLIGHT_TICKET_PAX = "GET_FLIGHT_TICKET_PAX"
export const GET_FLIGHT_TICKET_PAX_SUCCESS = "GET_FLIGHT_TICKET_PAX_SUCCESS"
export const GET_FLIGHT_TICKET_PAX_ERROR = "GET_FLIGHT_TICKET_PAX_ERROR"


export function getFlightTicketPax(data) {
    return {
        type: GET_FLIGHT_TICKET_PAX,
        url: `v1/flights/ticket/pax/${data.data}`,
        token : data.token
    }
}
