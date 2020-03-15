export const BLOCK_TICKET = "BLOCK_TICKET";
export const BLOCK_TICKET_SUCCESS = "BLOCK_TICKET_SUCCESS";
export const BLOCK_TICKET_ERROR = "BLOCK_TICKET_ERROR";

export function blockTicket(data) {
    return {
        type : BLOCK_TICKET,
        url : 'v1/flights/ticket/block',
        method : "POST",
        data : data
    }
}
