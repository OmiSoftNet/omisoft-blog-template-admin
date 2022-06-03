import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config/api";
import { API_ROUTES } from "../../config/apiRoutes";
import {
  ILoginCredentials,
  IResetPasswordCredentials,
  IOneTimeLink,
  IChangePassword,
} from "../../types/auth";
import { User, UserLogged } from "../../types/users";
import { LocalStorage } from "../../utils/LocalStorage";

/**
 * @description Dispatch this thunk to send login data, and receive secret key for 2fa validation
 * @param {ILoginCredentials} reqData - Object containing email and password
 */
export const logInThunk = createAsyncThunk<User, ILoginCredentials>(
  "auth/logInThunk",
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await API.post<UserLogged>(API_ROUTES.AUTH.LOGIN, {
        ...reqData,
      });

      LocalStorage.setToken(data.accessToken);
      LocalStorage.setRefreshToken(data.refreshToken);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signUpThunk = createAsyncThunk<User, ILoginCredentials>(
  "auth/signUpThunk",
  async (reqData, { rejectWithValue }) => {
    try {
      const { data } = await API.post<UserLogged>(API_ROUTES.AUTH.SIGN_UP, {
        ...reqData,
      });

      LocalStorage.setToken(data.accessToken);
      LocalStorage.setRefreshToken(data.refreshToken);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const resetPasswordThunk = createAsyncThunk<
  string,
  IResetPasswordCredentials
>("auth/resetPasswordThunk", async (reqData, { rejectWithValue }) => {
  try {
    await API.put(API_ROUTES.AUTH.RESET_PASSWORD, {
      ...reqData,
    });
    return "success";
  } catch (error: any) {
    return rejectWithValue(error.response.data.error);
  }
});

export const getUserByIdThunk = createAsyncThunk<User, string>(
  "users/getUserByIdThunk",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await API.post(API_ROUTES.USERS.GET_BY_ID(id));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getAdminThunk = createAsyncThunk<User, string>(
  "users/getUserByIdThunk",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await API.post(API_ROUTES.USERS.GET_BY_ID(id));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const validateOneTimeLink = createAsyncThunk(
  "auth/validateOneTimeLink",
  async (reqData: IOneTimeLink, { rejectWithValue }) => {
    try {
      const { data } = await API.post(
        API_ROUTES.ONE_TIME_LINKS.VALIDATE,
        reqData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const deleteOneTimeLink = createAsyncThunk(
  "auth/deleteOneTimeLink",
  async (token: string, { rejectWithValue }) => {
    try {
      const { data } = await API.delete(
        API_ROUTES.ONE_TIME_LINKS.DELETE(token)
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changePasswordThunk = createAsyncThunk<string, IChangePassword>(
  "auth/changePasswordThunk",
  async (reqData, { rejectWithValue }) => {
    try {
      await API.post(API_ROUTES.AUTH.CHANGE_PASSWORD, {
        ...reqData,
      });
      return "success";
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);
