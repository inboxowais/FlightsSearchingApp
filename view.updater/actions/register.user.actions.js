export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS"
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR"
export const GET_INDENT = "GET_INDENT"
export const GET_INDENT_SUCCESS = "GET_INDENT_SUCCESS"
export const GET_INDENT_ERROR = "GET_INDENT_ERROR"
export const VERIFY_OTP = "VERIFY_OTP"
export const VERIFY_OTP_SUCCESS = "VERIFY_OTP_SUCCESS"
export const VERIFY_OTP_ERROR = "VERIFY_OTP_ERROR"
export const CREATE_LOGIN = "CREATE_LOGIN"
export const CREATE_LOGIN_SUCCESS = "CREATE_LOGIN_SUCCESS"
export const CREATE_LOGIN_ERROR = "CREATE_LOGIN_ERROR"

export function register(data) {
    return {
        type: REGISTER_USER,
        url: 'v1/accounts/register',
        method: "POST",
        data: data
    }
}

export function getIndent(phoneNumber) {
    return {
        type: GET_INDENT,
        url: `v1/accounts/otp?phone=${phoneNumber}`
    }
}

export function verifyOtp(data) {
    return {
        type: VERIFY_OTP,
        method: "PUT",
        url: `v1/accounts/otp?ident=${data.indent}&otp=${data.otp}&skipuser=false`
    }
}

export function createLogin(data) {
    return {
        type: CREATE_LOGIN,
        url: 'v1/accounts/create-login',
        method: "POST",
        data: data
    }
}

