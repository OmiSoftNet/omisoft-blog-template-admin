import { createSelector } from "reselect";
import { RootState } from "..";

const authState = (state: RootState) => state.auth;
/**
 * @description Get data of logged user
 */
export const userSelector = createSelector(authState, ({ user }) => user);

/**
 * @description Get statuses of auth slice
 */
export const authStatusSelector = createSelector(
  authState,
  ({ statuses }) => statuses
);

export const resetPasswordInfoSelector = createSelector(
  authState,
  ({ resetPasswordInfo }) => resetPasswordInfo
);
