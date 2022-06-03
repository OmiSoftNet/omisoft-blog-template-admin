import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../config/api";
import { API_ROUTES } from "../../config/apiRoutes";
import { IPaginate } from "../../types/pagination";
import {
  GetPostQuery,
  Post,
  CreatePostQuery,
  PostEditQuery,
} from "../../types/post";

/**
 * @description Dispatch this thunk to create  post
 * @param {Post} bodyData - Object containing information for creating new post
 */
export const createPostThunk = createAsyncThunk<Post, CreatePostQuery>(
  "posts/createPostThunk",
  async (bodyData, { rejectWithValue }) => {
    try {
      const { data } = await API.post(API_ROUTES.POSTS.CREATE, { ...bodyData });
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

/**
 * @description Dispatch this thunk to get list of posts
 * @param queryData - Object containing limit and page (used for pagination)
 */
export const getAllPostsThunk = createAsyncThunk<IPaginate<Post>, GetPostQuery>(
  "posts/getAllPostsThunk",
  async ({ limit = 8, page }, { rejectWithValue }) => {
    try {
      const { data } = await API.get<IPaginate<Post>>(
        API_ROUTES.POSTS.ALL_POSTS(limit, page)
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getAllUrlThunk = createAsyncThunk(
  "posts/getAllUrlThunk",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get(API_ROUTES.POSTS.POSTS_URL());
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

/**
 * @description Dispatch this thunk to get post by id
 * @param {string} id - String id to find current post
 */
export const getPostByIdThunk = createAsyncThunk<Post, string>(
  "posts/getPostByIdThunk",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await API.get(API_ROUTES.POSTS.GET_BY_ID(id));
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

/**
 * @description Dispatch this thunk to edit post by id
 * @param {IPost} values - an Object containing information for updating post
 */

export const editPostThunk = createAsyncThunk(
  "posts/editPostThunk",
  async (values: PostEditQuery, { rejectWithValue }) => {
    try {
      const post = await API.put(API_ROUTES.POSTS.UPDATE_POST(values._id), {
        ...values,
      });
      return post;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error);
    }
  }
);

/**
 * @description Dispatch this thunk to delete post by id
 * @param {string} id - String id to find current post for deleting
 */

export const deletePostThunk = createAsyncThunk(
  "posts/deletePostThunk",
  async (id: string, { rejectWithValue }) => {
    try {
      const post = await API.delete(API_ROUTES.POSTS.DELETE(id));
      return post;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
