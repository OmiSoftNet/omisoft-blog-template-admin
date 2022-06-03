/**
 * @description Object containing all request endpoints
 */
export const API_ROUTES = {
  AUTH: {
    LOGIN: "auth/login/",
    SIGN_UP: "auth/admin-register/",
    CHANGE_PASSWORD: "auth/change-password/",
    RESET_PASSWORD: "auth/reset-password/",
  },
  USERS: {
    CREATE: "users/create/",
    GET_ADMIN: "users/admin/",
    GET_LIST: (limit: number, page: number) =>
      `users/?page=${page}&limit=${limit}`,
    DELETE: (id: string) => `users/delete/${id}/`,
    GET_BY_ID: (id: string) => `users/${id}/`,
    UPDATE: (id: string) => `users/${id}/`,
  },
  POSTS: {
    CREATE: "posts/create/",
    DELETE: (id: string) => `posts/delete/${id}/`,
    ALL_POSTS: (limit: number = 8, page: number = 1) =>
      `posts-admin/?page=${page}&limit=${limit}`,
    GET_BY_ID: (id: string) => `post/${id}/`,
    UPDATE_POST: (id: string) => `posts/update/${id}/`,
    POSTS_URL: () => `posts/blog/url/`,
  },
  ONE_TIME_LINKS: {
    GENERATE: "one-time-link/generate/",
    VALIDATE: "one-time-link/validate/",
    DELETE: (token: string) => `one-time-link/delete/${token}`,
  },
};
