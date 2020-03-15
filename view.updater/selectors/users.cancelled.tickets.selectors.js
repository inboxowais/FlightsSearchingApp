import { createSelector } from 'reselect';

const getUserCancelledTicket = (state) => state.get('getUsersCancelledTicketsReducer');

const makeSelectUserCancelledTicket = () => createSelector(
    getUserCancelledTicket,
    (getUserCancelledTicket) => getUserCancelledTicket.get('usersCancelledTicket')
);
const makeSelectUserCancelledTicketLoading = () => createSelector(
    getUserCancelledTicket,
    (getUserCancelledTicket) => getUserCancelledTicket.get("usersCancelledTIcketsLoading")
)
const makeSelectUserCancelledTicketEoor = () => createSelector(
    getUserCancelledTicket,
    (getUserCancelledTicket) => getUserCancelledTicket.get("usersCancelledTicketsError")
)

export {
    makeSelectUserCancelledTicket,
    makeSelectUserCancelledTicketLoading,
    makeSelectUserCancelledTicketEoor
}

