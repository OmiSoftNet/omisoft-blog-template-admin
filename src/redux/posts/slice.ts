import { createSlice } from "@reduxjs/toolkit";
import { Post, UrlInfo } from "../../types/post";
import { IStoreStatuses, STATUS_ENUM } from "../../types/statuses";
import { IPaginate } from "../../types/pagination";
import { StatusGenerator } from "../../utils/StatusGenerator";
import {
  createPostThunk,
  getAllPostsThunk,
  getPostByIdThunk,
  editPostThunk,
  deletePostThunk,
  getAllUrlThunk,
} from "./thunks";
import { LoadingResultsT } from "../../helpers/constants";

interface IState {
  urls: UrlInfo[] | [];
  posts: IPaginate | null;
  selectedPost: Post | null;
  loading:
    | LoadingResultsT.IDLE
    | LoadingResultsT.PENDING
    | LoadingResultsT.SUCCEEDED
    | LoadingResultsT.FAILED;
  statuses: IStoreStatuses;
}
const initialState: IState = {
  urls: [],
  posts: null,
  selectedPost: null,
  loading: LoadingResultsT.IDLE,
  statuses: StatusGenerator.generateStatuses([
    getAllPostsThunk.typePrefix,
    createPostThunk.typePrefix,
    getPostByIdThunk.typePrefix,
    editPostThunk.typePrefix,
    deletePostThunk.typePrefix,
  ]),
};
const postSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    reset: () => initialState,
    setUrls: (state, action) => {
      state.urls = action.payload.data ?? [];
    },
    setPosts: (state, action) => {
      state.posts = action.payload.data ?? null;
    },
    setSelectedPost: (state, action) => {
      state.selectedPost = action.payload.data ?? null;
    },
    resetStatus: (state) => {
      state.statuses = initialState.statuses;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createPostThunk.pending, (state) => {
        state.statuses[createPostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
        state.loading = LoadingResultsT.PENDING;
      })
      .addCase(createPostThunk.rejected, (state, { payload }) => {
        state.statuses[createPostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          payload as string
        );
        state.loading = LoadingResultsT.FAILED;
      })
      .addCase(createPostThunk.fulfilled, (state, { payload }) => {
        state.statuses[createPostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.selectedPost = payload;
        state.loading = LoadingResultsT.SUCCEEDED;
      })
      .addCase(getAllPostsThunk.pending, (state) => {
        state.statuses[getAllPostsThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
        state.loading = LoadingResultsT.IDLE;
      })
      .addCase(getAllPostsThunk.rejected, (state, { error }) => {
        state.statuses[getAllPostsThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(getAllPostsThunk.fulfilled, (state, { payload }) => {
        state.statuses[getAllPostsThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.posts = payload;
      })
      .addCase(getAllUrlThunk.pending, (state) => {
        state.statuses[getAllUrlThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
        state.loading = LoadingResultsT.IDLE;
      })
      .addCase(getAllUrlThunk.rejected, (state, { error }) => {
        state.statuses[getAllUrlThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(getAllUrlThunk.fulfilled, (state, { payload }) => {
        state.statuses[getAllUrlThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.urls = payload;
      })
      .addCase(getPostByIdThunk.pending, (state) => {
        state.statuses[getPostByIdThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(getPostByIdThunk.rejected, (state, { error }) => {
        state.statuses[getPostByIdThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(getPostByIdThunk.fulfilled, (state, { payload }) => {
        state.statuses[getPostByIdThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.selectedPost = payload;
      })
      .addCase(editPostThunk.pending, (state) => {
        state.statuses[editPostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
        state.loading = LoadingResultsT.PENDING;
      })
      .addCase(editPostThunk.rejected, (state, { payload }) => {
        state.statuses[editPostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          payload as string
        );
        state.loading = LoadingResultsT.FAILED;
      })
      .addCase(editPostThunk.fulfilled, (state, { payload }) => {
        state.statuses[editPostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
        state.selectedPost = payload?.data;
        state.loading = LoadingResultsT.SUCCEEDED;
      })
      .addCase(deletePostThunk.pending, (state) => {
        state.statuses[deletePostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.PENDING
        );
      })
      .addCase(deletePostThunk.rejected, (state, { error }) => {
        state.statuses[deletePostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.REJECTED,
          error.message
        );
      })
      .addCase(deletePostThunk.fulfilled, (state) => {
        state.statuses[deletePostThunk.typePrefix] = StatusGenerator.setStatus(
          STATUS_ENUM.FULFILLED
        );
      }),
});

export default postSlice;
