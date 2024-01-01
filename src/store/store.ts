import { configureStore } from "@reduxjs/toolkit";
import authSlice from "@/store/Slices/AuthSlice";
import messageSlice from "@/store/Slices/MessageSlice";
import mainSlice from "@/store/Slices/MainSlice";

export const store = configureStore({
  reducer: {
    authSlice,
    messageSlice,
    mainSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
