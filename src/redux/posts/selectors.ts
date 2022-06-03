import { createSelector } from "reselect";
import { RootState } from "..";

const postsState = (state: RootState) => state.posts;

/**
 * @description Get list of posts available on current page (pagination is used)
 */
export const postsSelector = createSelector(postsState, ({ posts }) => posts);

/**
 * @description Get data of selected post
 */
export const selectedPostSelector = createSelector(
  postsState,
  ({ selectedPost }) => selectedPost
);

export const loadingSelector = createSelector(
  postsState,
  ({ loading }) => loading
);

export const postStatusSelector = createSelector(
  postsState,
  ({ statuses }) => statuses
);
export const allPostsUrlsSelector = createSelector(
  postsState,
  ({ urls }) => urls
);
