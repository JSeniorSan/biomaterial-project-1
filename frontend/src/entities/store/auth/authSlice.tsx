import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { checkIsAuth, login } from "./auth-thunk";

export interface AuthState {
  isAuth: boolean;
  loading: boolean;
  error: unknown;
}

const initialState: AuthState = {
  isAuth: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state) => {
      state.isAuth = true;
      state.loading = false;
    }),
      builder.addCase(login.pending, (state) => {
        state.loading = true;
      });
    builder.addCase(login.rejected, (state, action: PayloadAction<unknown>) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(checkIsAuth.fulfilled, (state) => {
      state.isAuth = true;
      state.loading = false;
    }),
      builder.addCase(checkIsAuth.pending, (state) => {
        state.loading = true;
      });
    builder.addCase(
      checkIsAuth.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { isAuth } = authSlice.actions;

export default authSlice.reducer;
