import { createSelector } from 'reselect';

const registerUser = (state) => state.get('registerUserReducer');

const makeSelecterRegisterUser = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get('registerUser')
);
const makeSelectRegisterUserLoading = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get("registerUserLoading")
)
const makeSelectRegisterUserError = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get("registerUserError")
)



const makeSelecterIndent = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get('indent')
);
const makeSelectIndentLoading = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get("indentLoading")
)
const makeSelectIndentError = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get("indentError")
)

const makeSelectVerifyOtp = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get('verifyOtp')
);
const makeSelectVerifyOtpLoading = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get("verifyOtpLoading")
)
const makeSelectVerifyOtpError = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get("verifyOtpError")
)

const makeSelectCreateLogin = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get('createLogin')
);
const makeSelectCreateLoginLoading = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get("createLoginLoading")
)
const makeSelectCreateLoginError = () => createSelector(
    registerUser,
    (registerUser) => registerUser.get("createLoginError")
)

export {
    makeSelecterRegisterUser,
    makeSelectRegisterUserLoading,
    makeSelectRegisterUserError,
    makeSelecterIndent,
    makeSelectIndentLoading,
    makeSelectIndentError,
    makeSelectVerifyOtp,
    makeSelectVerifyOtpError,
    makeSelectVerifyOtpLoading,
    makeSelectCreateLogin,
    makeSelectCreateLoginError,
    makeSelectCreateLoginLoading
}

