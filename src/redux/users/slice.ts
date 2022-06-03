import { createSlice } from "@reduxjs/toolkit";
import { IStoreStatuses, STATUS_ENUM } from "../../types/statuses";
import { StatusGenerator } from "../../utils/StatusGenerator";
import {
  createUserThunk,
  getAllUsersThunk,
  getUserByIdThunk,
  editUser,
  deleteUserThunk,
} from "./thunks";
import { User } from "../../types/users";

interface IState {
  users: User[] | null;
  selectedUser: User | null;
  statuses: IStoreStatuses;
}

const initialState: IState = {
  users: null,
  selectedUser: null,
  statuses: StatusGenerator.generateStatuses([getAllUsersThunk.typePrefix]),
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload.data ?? null;
    },
    setUsers: (state, action) => {
      state.users = action.payload.data ?? null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createUserThunk.pending, (state) => {
        state.statuses[createUserThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(createUserThunk.rejected, (state, { error }) => {
        state.statuses[createUserThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(createUserThunk.fulfilled, (state, { payload }) => {
        state.statuses[createUserThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.selectedUser = payload;
      })
      .addCase(getAllUsersThunk.pending, (state) => {
        state.statuses[getAllUsersThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(getAllUsersThunk.rejected, (state, { error }) => {
        state.statuses[getAllUsersThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(getAllUsersThunk.fulfilled, (state, { payload }) => {
        state.statuses[getAllUsersThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.users = payload;
      })
      .addCase(getUserByIdThunk.pending, (state) => {
        state.statuses[getUserByIdThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(getUserByIdThunk.rejected, (state, { error }) => {
        state.statuses[getUserByIdThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(getUserByIdThunk.fulfilled, (state, { payload }) => {
        state.statuses[getUserByIdThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.selectedUser = payload;
      })
      .addCase(editUser.pending, (state) => {
        state.statuses[editUser.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(editUser.rejected, (state, { error }) => {
        state.statuses[editUser.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(editUser.fulfilled, (state, { payload }) => {
        state.statuses[editUser.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.selectedUser = payload;
      })
      .addCase(deleteUserThunk.pending, (state) => {
        state.statuses[deleteUserThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(deleteUserThunk.rejected, (state, { error }) => {
        state.statuses[deleteUserThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(deleteUserThunk.fulfilled, (state) => {
        state.statuses[deleteUserThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
      }),
});

export default usersSlice;
