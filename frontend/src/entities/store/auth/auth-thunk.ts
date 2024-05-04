import { API_URL } from "@/entities/http";
import AuthService from "@/entities/services/auth/auth-service";
import { LoginResponseType } from "@/entities/services/auth/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "/auth/login",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await AuthService.login(username, password);
      localStorage.setItem("token", response.data.access_token);
      localStorage.setItem("refreshToken", response.data.refresh_token);
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const checkIsAuth = createAsyncThunk(
  "/auth/checkIsAuth",
  async (refreshToken: string, { rejectWithValue }) => {
    try {
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
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error);
      }
    }
  }
);
