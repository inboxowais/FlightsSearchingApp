export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"


export function login(data) {
    return {
        type: LOGIN,
        url: 'v1/accounts/token',
        data: data.data,
        method: "PUT",
        token: data.token
    }
}
