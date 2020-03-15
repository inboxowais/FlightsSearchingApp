export const GET_USER_UPCOMING_TICKETS = "GET_USER_UPCOMING_TICKETS"
export const GET_USER_UPCOMING_TICKETS_SUCCESS = "GET_USER_UPCOMING_TICKETS_SUCCESS"
export const GET_USER_UPCOMING_TICKETS_ERROR = "GET_USER_UPCOMING_TICKETS_ERROR"


export function getUpComingFlights(data) {
    
    return {
        type: GET_USER_UPCOMING_TICKETS,
        url: `v1/services/tickets/${data.data}/1/3/upcoming`,
        token: data.token
    }
}
