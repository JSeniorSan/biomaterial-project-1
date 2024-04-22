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
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const response = await axios.post<LoginResponseType>(
          `${API_URL}/auth/refresh`,
          null,

          {
            headers: {
              refresh_token: refreshToken,
            },
            withCredentials: true,
          }
        );
        // const response = await axios.post<LoginResponseType>(
        //   `${API_URL}/auth/refresh`,
        //   null,
        //   {
        //     headers: {
        //       Authorization: `Bearer ${refreshToken}`,
        //     },
        //     withCredentials: true,
        //   }
        // );
        // if (refreshToken) {
        //   const response = await fetch(`${API_URL}/auth/refresh`, {
        //     method: "POST",
        //     headers: {
        //       refresh_token: refreshToken,
        //     },
        //     w
        //   });

        // }
        // const data = await response.json();
        console.log("refresh response", response);
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
