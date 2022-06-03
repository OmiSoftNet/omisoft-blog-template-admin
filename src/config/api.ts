import axios from "axios";
import { BASE_URL } from "../helpers/constants";
import { LocalStorage } from "../utils/LocalStorage";

/**
 * @description Axios instance used for API requests
 */
export const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use((config) => {
  const accessToken = LocalStorage.getToken();
  if (accessToken && config.headers) {
    config.headers.Authorization = `Bearer ${accessToken}`;
    config.headers["Accept-Language"] = "en-US";
  }
  return config;
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status !== 401) return Promise.reject(error);
    LocalStorage.clearToken();
  }
);
