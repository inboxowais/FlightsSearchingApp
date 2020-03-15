import FlightsResult from './flights.result';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectFlight } from './../../view.updater/actions/flight.select.actions'
import {makeGetSelectedFlight , makeGetSelectedLoading , makeGetSelectedFlightError} from './../../view.updater/selectors/flights.select.selectors'
import {makeSelectFlights,makeSelectFlightsLoading} from './../../view.updater/selectors/flights.selectors'
import {getFlightFare} from './../../view.updater/actions/flights.fare.actions'

const mapDispatchToProps = (dispatch) => ({
    selectFlight: (data) => dispatch(selectFlight(data)),
  
});

const mapStateToProps = createStructuredSelector({
    makeGetSelectedFlight : makeGetSelectedFlight(),
    makeGetSelectedLoading : makeGetSelectedLoading(),
    makeGetSelectedFlightError : makeGetSelectedFlightError(),
    flightsResult : makeSelectFlights(),
    flightsSearching : makeSelectFlightsLoading()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(FlightsResult);