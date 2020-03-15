export const GET_USER_COMPLETED_TICKETS = "GET_USER_COMPLETED_TICKETS"
export const GET_USER_COMPLETED_TICKETS_SUCCESS = "GET_USER_COMPLETED_TICKETS_SUCCESS"
export const GET_USER_COMPLETED_TICKETS_ERROR = "GET_USER_COMPLETED_TICKETS_ERROR"


export function getCompletedFlights(data) {
    return {
        type: GET_USER_COMPLETED_TICKETS,
        url: `v1/services/tickets/${data.data}/1/3/completed`,
        token: data.token
    }
}
