import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config/api";
import { API_ROUTES } from "../../config/apiRoutes";
import { IUsersListQueryData, User } from "../../types/users";

/**
 * @description Dispatch this thunk to create user
 * @param {User} bodyData - Object containing information for creating new user
 */
export const createUserThunk = createAsyncThunk(
  "users/createUserThunk",
  async (bodyData: User, { rejectWithValue }) => {
    try {
      const { data } = await API.post(API_ROUTES.USERS.CREATE, { ...bodyData });
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

/**
 * @description Dispatch this thunk to get list of users
 * @param {IUsersListQueryData} queryData - Object containing limit and page (used for pagination)
 */
export const getAllUsersThunk = createAsyncThunk(
  "users/getAllUsersThunk",
  async (queryData: IUsersListQueryData | undefined, { rejectWithValue }) => {
    const { limit = 30, page = 1 } = queryData ?? {};

    try {
      const { data } = await API.get(API_ROUTES.USERS.GET_LIST(limit, page));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
/**
 * @description Dispatch this thunk to get user by id
 * @param {string} id - String id to find current user
 */
export const getUserByIdThunk = createAsyncThunk(
  "users/getUserByIdThunk",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await API.get(API_ROUTES.USERS.GET_BY_ID(id));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

/**
 * @description Dispatch this thunk to get user by id
 * @param {IUser} values -an Object containing information for updating user
 */

export const editUser = createAsyncThunk(
  "users/editUser",
  async (values: User, { rejectWithValue, dispatch, getState }) => {
    try {
      const { data } = await API.put(API_ROUTES.USERS.UPDATE(values._id), {
        ...values,
      });
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

/**
 * @description Dispatch this thunk to delete user by id
 * @param {string} id - String id to find current user for deleting
 */
export const deleteUserThunk = createAsyncThunk(
  "users/deleteUserThunk",
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await API.delete(API_ROUTES.USERS.DELETE(id));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);