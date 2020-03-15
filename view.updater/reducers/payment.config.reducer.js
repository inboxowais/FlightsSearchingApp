import Immutable from 'immutable';
import {
    GET_PAYMENT_CONFIG,
    GET_PAYMENT_CONFIG_ERROR,
    GET_PAYMENT_CONFIG_SUCCESS
} from './../actions/payment.config.actions'

const initialState = Immutable.fromJS({
    paymenyConfig: [],
    paymentConfigLoading: false,
    paymentConfigError: false
});

function getPaymentConfig(state = initialState, action) {
    switch (action.type) {
        case GET_PAYMENT_CONFIG:
            return state
                .set('paymentConfigLoading', true)
                .set("paymentConfigError", false)
        case GET_PAYMENT_CONFIG_SUCCESS:
           console.log(action.response)
            return state
                .set('paymenyConfig', action.response)
                .set('paymentConfigError', false)
                .set("paymentConfigLoading", false)
        case GET_PAYMENT_CONFIG_ERROR:
            return state
                .set('paymentConfigError', true)
                .set('paymentConfigLoading', false)
        default:
            return state;
    }
}
export default getPaymentConfig