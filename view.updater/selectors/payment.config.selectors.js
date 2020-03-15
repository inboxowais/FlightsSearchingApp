import { createSelector } from 'reselect';

const getPaymentConfig = (state) => state.get('getPaymentConfig');

const makeSelectPaymentConfig = () => createSelector(
    getPaymentConfig,
    (getPaymentConfig) => getPaymentConfig.get('paymenyConfig')
);
const makeSelectPaymentConfigLoading = () => createSelector(
    getPaymentConfig,
    (getPaymentConfig) => getPaymentConfig.get("paymentConfigLoading")
)
const makeSelectPaymentConfigError = () => createSelector(
    getPaymentConfig,
    (getPaymentConfig) => getPaymentConfig.get("paymentConfigError")
)

export {
    makeSelectPaymentConfig,
    makeSelectPaymentConfigLoading,
    makeSelectPaymentConfigError
}

