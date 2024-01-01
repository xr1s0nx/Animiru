import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User } from "@/static/types";

export interface MainSlice {
  navbarIsOpen?: boolean;
}

const initialState: MainSlice = {
  navbarIsOpen: localStorage.getItem("navbarIsOpen") === "true",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.navbarIsOpen = !state.navbarIsOpen;
      localStorage.setItem("navbarIsOpen", JSON.stringify(state.navbarIsOpen));
    },
  },
});

export const { toggleNavbar } = mainSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default mainSlice.reducer;
