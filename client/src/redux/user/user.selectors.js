import {createSelector} from "reselect";

const selectUser = state=>state.userReducer;

export const selectCurrentUser = createSelector([selectUser], userReducer=>userReducer.currentUser);
export const selectCurrentUserId = createSelector([selectCurrentUser], currentUser => currentUser ? currentUser.id : null);