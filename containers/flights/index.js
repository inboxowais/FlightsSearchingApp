import Flights from './flights';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {makeSelectSource,makeSelectDestination} from './../../view.updater/selectors/flights.data.selectors'
import {searchFlights} from './../../view.updater/actions/flights.actions'
import {makeSelectFlights,makeSelectFlightsLoading} from './../../view.updater/selectors/flights.selectors'
import {getPaymentConfig} from './../../view.updater/actions/payment.config.actions'

const mapDispatchToProps = (dispatch) => ({
      searchFlights: (data) => dispatch(searchFlights(data)),
      getPaymentConfig: (data) => dispatch(getPaymentConfig(data))
});

const mapStateToProps = createStructuredSelector({
      source : makeSelectSource(),
      destination : makeSelectDestination(),
      flightsResult : makeSelectFlights(),
      flightsSearching : makeSelectFlightsLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(Flights);