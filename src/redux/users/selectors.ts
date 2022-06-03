import { createSelector } from 'reselect';
import { RootState } from '..';

const usersState = (state: RootState) => state.users;

/**
 * @description Get list of users available on current page (pagination is used)
 */
export const usersSelector = createSelector(usersState, ({ users }) => users);

/**
 * @description Get data of selected user
 */
export const selectedUserSelector = createSelector(usersState, ({ selectedUser }) => selectedUser);
