import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/entities/store/auth/authSlice";

export const store = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
