import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('authReducer');

const makeSelectAuthResponse = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('loginInResponse')
);
const makeSelectAuthLoading = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get("loginLoading")
)
const makeSelectAuthError = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get("loginError")
)

export {
    makeSelectAuthResponse,
    makeSelectAuthLoading,
    makeSelectAuthError
}

