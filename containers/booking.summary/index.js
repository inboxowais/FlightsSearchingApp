import BookingSummary from './booking.summary';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeGetSelectedFlight, makeGetSelectedLoading } from './../../view.updater/selectors/flights.select.selectors'
import { getFlightFare } from './../../view.updater/actions/flights.fare.actions'
import { makeSelectFlightFare, makeSelectFlightFareError, makeSelectFlightFareLoading } from './../../view.updater/selectors/flights.fare.selectors'
import { makeSelectAuthResponse, makeSelectAuthLoading } from './../../view.updater/selectors/auth.selectors'
import { getFlightTicketPax } from './../../view.updater/actions/flights.ticket.pax.actions'
import { addUser } from './../../view.updater/actions/add.user.actions';
import { makeSelectUser, makeSelectUserLoading } from './../../view.updater/selectors/add.user.selectors';
import { blockTicket } from './../../view.updater/actions/block.ticket.actions';
import { makeSelectFlights } from './../../view.updater/selectors/flights.selectors';
import { makeBlockTicket,makeBlockTicketLoading,makeBlockTIcketError } from './../../view.updater/selectors/block.ticket.selectors'
import { getPaymentConfig } from './../../view.updater/actions/payment.config.actions'
import { makeSelectPaymentConfig } from './../../view.updater/selectors/payment.config.selectors'


const mapDispatchToProps = (dispatch) => ({
       getFlightFare: (data) => dispatch(getFlightFare(data)),
       getFlightTicketPax: (data) => dispatch(getFlightTicketPax(data)),
       addUser: (data) => dispatch(addUser(data)),
       blockTicket: (data) => dispatch(blockTicket(data)),
       getPaymentConfig: (data) => dispatch(getPaymentConfig(data)),
});

const mapStateToProps = createStructuredSelector({
       selectedFlights: makeGetSelectedFlight(),
       selectedFlightsLoading: makeGetSelectedLoading(),
       flightFare: makeSelectFlightFare(),
       flightFareLoading: makeSelectFlightFareLoading(),
       flightFareError: makeSelectFlightFareError(),
       userDetail: makeSelectAuthResponse(),
       userDetailLoading: makeSelectAuthLoading(),
       addedUser: makeSelectUser(),
       addedUserLoading: makeSelectUserLoading(),
       flights: makeSelectFlights(),
       blockTicketData: makeBlockTicket(),
       paymentConfig: makeSelectPaymentConfig()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(BookingSummary);