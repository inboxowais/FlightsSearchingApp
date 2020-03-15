import UserTicket from './user.tickets';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectAuthResponse } from './../../view.updater/selectors/auth.selectors'
import { getUpComingFlights } from './../../view.updater/actions/user.upcoming.tickets.actions'
import { getUserCancelledTickets } from './../../view.updater/actions/users.cancalled.tickets.actions'
import { getCompletedFlights } from './../../view.updater/actions/user.completed.actions'
import { makeSelectUpComingTicketError, makeSelectUpComingTickets, makeSelectUpComingTicketsLoading } from './../../view.updater/selectors/users.upcoming.tickets.selectors'
import { makeSelectCompletedFlights, makeSelectCompletedFlightsError, makeSelectCompletedFlightsLoading } from './../../view.updater/selectors/user.completed.selectors'
import { makeSelectUserCancelledTicket, makeSelectUserCancelledTicketLoading, makeSelectUserCancelledTicketEoor } from './../../view.updater/selectors/users.cancelled.tickets.selectors'

const mapDispatchToProps = (dispatch) => ({
   getUpComingFlights: (data) => dispatch(getUpComingFlights(data)),
   getUserCancelledTickets: (data) => dispatch(getUserCancelledTickets(data)),
    getCompletedFlights: (data) => dispatch(getCompletedFlights(data))
});

const mapStateToProps = createStructuredSelector({
   auth: makeSelectAuthResponse(),
   upComingTickets: makeSelectUpComingTickets(),
   upComingTicketsError: makeSelectUpComingTicketError(),
   upComingTIcketsLoading: makeSelectUpComingTicketsLoading(),
   completedFlights: makeSelectCompletedFlights(),
   completedFlightsLoading:makeSelectCompletedFlightsLoading(),
   completedFlightsError : makeSelectCompletedFlightsError(),
   cancelledFlightsLoading: makeSelectUserCancelledTicketLoading(),
   cancelledFlights: makeSelectUserCancelledTicket(),
   cancelledFlightsError: makeSelectUserCancelledTicketEoor()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(UserTicket);