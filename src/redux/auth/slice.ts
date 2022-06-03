import { createSlice } from "@reduxjs/toolkit";
import {
  IStoreStatuses,
  STATUS_ENUM,
  IResetPassword,
} from "../../types/statuses";
import { StatusGenerator } from "../../utils/StatusGenerator";
import {
  logInThunk,
  signUpThunk,
  resetPasswordThunk,
  validateOneTimeLink,
  deleteOneTimeLink,
  changePasswordThunk,
} from "./thunks";

interface IState {
  user: object | null;
  statuses: IStoreStatuses;
  resetPasswordInfo: IResetPassword | null;
}

const initialState: IState = {
  user: null,
  resetPasswordInfo: null,
  statuses: StatusGenerator.generateStatuses([
    logInThunk.typePrefix,
    signUpThunk.typePrefix,
    resetPasswordThunk.typePrefix,
    validateOneTimeLink.typePrefix,
    changePasswordThunk.typePrefix,
  ]),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    resetStatus: (state) => {
      state.statuses = initialState.statuses;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(logInThunk.pending, (state) => {
        state.statuses[logInThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(logInThunk.rejected, (state, { error }) => {
        state.statuses[logInThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(logInThunk.fulfilled, (state, { payload }) => {
        state.statuses[logInThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.user = payload;
      })
      .addCase(changePasswordThunk.pending, (state) => {
        state.statuses[changePasswordThunk.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.PENDING);
      })
      .addCase(changePasswordThunk.rejected, (state, { payload }) => {
        state.statuses[changePasswordThunk.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.REJECTED, payload as string);
      })
      .addCase(changePasswordThunk.fulfilled, (state) => {
        state.statuses[changePasswordThunk.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.FULFILLED);
      })
      .addCase(signUpThunk.pending, (state) => {
        state.statuses[signUpThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(signUpThunk.rejected, (state, { error }) => {
        state.statuses[signUpThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(signUpThunk.fulfilled, (state, { payload }) => {
        state.statuses[signUpThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.user = payload;
      })
      .addCase(validateOneTimeLink.pending, (state) => {
        state.statuses[validateOneTimeLink.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.PENDING);
      })
      .addCase(validateOneTimeLink.rejected, (state, { error }) => {
        state.statuses[validateOneTimeLink.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.REJECTED, error.message);
      })
      .addCase(validateOneTimeLink.fulfilled, (state, { payload }) => {
        state.statuses[validateOneTimeLink.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.FULFILLED);
        state.resetPasswordInfo = payload;
      })
      .addCase(resetPasswordThunk.pending, (state) => {
        state.statuses[deleteOneTimeLink.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.PENDING);
      })
      .addCase(resetPasswordThunk.rejected, (state, { payload }) => {
        state.statuses[deleteOneTimeLink.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.REJECTED, payload as string);
      })
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.statuses[validateOneTimeLink.typePrefix] =
          StatusGenerator.setStatus(STATUS_ENUM.FULFILLED);
        state.resetPasswordInfo = null;
      }),
});

export default authSlice;
