import AirPortsSearch from './air.plane.search';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getAirPorts } from './../../../view.updater/actions/airports.actions';
import {setSoure} from './../../../view.updater/actions/flights.data.actions';
import {setDestination} from './../../../view.updater/actions/flights.data.actions';
import { makeSelectAirPorts, makeSelectAirPortsLoading, makeSelectAirPortsError  } from './../../../view.updater/selectors/airports.selectors'

const mapDispatchToProps = (dispatch) => ({
    getAirPorts: () => dispatch(getAirPorts()),
    setSoure: (data) => dispatch(setSoure(data)),
    setDestination: (data) => dispatch(setDestination(data))
});

const mapStateToProps = createStructuredSelector({
    airPorts: makeSelectAirPorts(),
    airPortsLoading: makeSelectAirPortsLoading(),
    airPortsError: makeSelectAirPortsError()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect)(AirPortsSearch);