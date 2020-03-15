import { createSelector } from 'reselect';

const selectUser = (state) => state.get('addUserReducer');

const makeSelectUser = () => createSelector(
    selectUser,
    (selectUser) => selectUser.get('addUser')
);
const makeSelectUserLoading = () => createSelector(
    selectUser,
    (selectUser) => selectUser.get("addUserLoading")
)
const makeSelectUserError = () => createSelector(
    selectUser,
    (selectUser) => selectUser.get("addUserError")
)

export {
    makeSelectUser,
    makeSelectUserLoading,
    makeSelectUserError
}

