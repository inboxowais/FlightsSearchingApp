export const GET_PAYMENT_CONFIG = "GET_PAYMENT_CONFIG"
export const GET_PAYMENT_CONFIG_SUCCESS = "GET_PAYMENT_CONFIG_SUCCESS"
export const GET_PAYMENT_CONFIG_ERROR = "GET_PAYMENT_CONFIG_ERROR"


export function getPaymentConfig(data) {
    console.log(data)
    return {
        type: GET_PAYMENT_CONFIG,
        url: `v1/payment/config?gateway=paytm&ident=${data}`,
    }
}
