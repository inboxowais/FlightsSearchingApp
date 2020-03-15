import { createSelector } from 'reselect';

const getUpComingTickets = (state) => state.get('getUserUpcomingTicketsReducer');

const makeSelectUpComingTickets = () => createSelector(
    getUpComingTickets,
    (getUpComingTickets) => getUpComingTickets.get('userUpcomingTickets')
);
const makeSelectUpComingTicketsLoading = () => createSelector(
    getUpComingTickets,
    (getUpComingTickets) => getUpComingTickets.get("userUpcomingTicketsLoading")
)
const makeSelectUpComingTicketError = () => createSelector(
    getUpComingTickets,
    (getUpComingTickets) => getUpComingTickets.get("userUpcomingTicketsError")
)

export {
    makeSelectUpComingTickets,
    makeSelectUpComingTicketsLoading,
    makeSelectUpComingTicketError
}

