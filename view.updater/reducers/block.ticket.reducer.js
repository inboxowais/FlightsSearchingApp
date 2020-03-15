import Immutable from 'immutable';
import { BLOCK_TICKET,BLOCK_TICKET_SUCCESS,BLOCK_TICKET_ERROR } from './../actions/block.ticket.actions'

const initialState = Immutable.fromJS({
    blockTicket: [],
    blockTicketLoading: false,
    blockTicketError: false
});

function blockTicketReducer(state = initialState, action) {

    switch (action.type) {
        case BLOCK_TICKET:
            return state
                .set('blockTicketLoading', true)
                .set("blockTicketError", true)
        case BLOCK_TICKET_SUCCESS:
      
            return state
                .set('blockTicketLoading', false)
                .set('blockTicketError', false)
                .set("blockTicket", action.response)
        case BLOCK_TICKET_ERROR:
            return state
                .set('blockTicketLoading', false)
                .set('blockTicketError', true)
        default:
            return state;
    }
}
export default blockTicketReducer