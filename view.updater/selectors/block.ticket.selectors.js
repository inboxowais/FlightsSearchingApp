import { createSelector } from 'reselect';

const blockTicket = (state) => state.get('blockTicketReducer');

const makeBlockTicket = () => createSelector(
    blockTicket,
    (blockTicket) => blockTicket.get('blockTicket')
);
const makeBlockTicketLoading = () => createSelector(
    blockTicket,
    (blockTicket) => blockTicket.get("blockTicketLoading")
)
const makeBlockTIcketError = () => createSelector(
    blockTicket,
    (blockTicket) => blockTicket.get("blockTicketError")
)

export {
    makeBlockTicket,
    makeBlockTicketLoading,
    makeBlockTIcketError
}

