import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User } from "@/static/types";

export interface AuthState {
  user: User | null;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.isAuth = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
