export const ADD_USER = "ADD_USER";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_ERROR = "ADD_USER_ERROR";

export function addUser(data) {
    return {
        type : ADD_USER,
        url : 'v1/accounts/add-user',
        method : "POST",
        data : data
    }
}
