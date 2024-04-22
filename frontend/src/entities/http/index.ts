import axios from "axios";
import { LoginResponseType } from "../services/auth/types";

export const API_URL = "http://localhost:80";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: { "content-type": "application/x-www-form-urlencoded" },
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 403 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post<LoginResponseType>(
          `${API_URL}/auth/refresh`,
          `grant_type=&refresh_token=${refreshToken}&scope=&client_id=&client_secret=`,
          {
            headers: {
              "content-type": "application/x-www-form-urlencoded",
            },
            withCredentials: true,
          }
        );

        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("refreshToken", response.data.refresh_token);
        return $api.request(originalRequest);
      } catch (error) {
        console.log("Пользователь не авторизован");
      }
    }
    return error;
  }
);

export default $api;
