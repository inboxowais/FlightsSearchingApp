export const GET_USERS_CANCELLED_TICKETS = "GET_USERS_CANCELLED_TICKETS"
export const GET_USERS_CANCELLED_TICKETS_SUCCESS = "GET_USERS_CANCELLED_TICKETS_SUCCESS"
export const GET_USERS_CANCELLED_TICKETS_ERROR = "GET_USERS_CANCELLED_TICKETS_ERROR"


export function getUserCancelledTickets(data) {
    
    return {
        type: GET_USERS_CANCELLED_TICKETS,
        url: `v1/services/tickets/${data.data}/1/3/cancelled`,
        token: data.token
    }
}
