import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { User } from "@/static/types";

export interface MessageSlice {
  type: "Error" | "Loading" | "Success";
  message: string;
  active: boolean;
}

const initialState: MessageSlice = {
  type: "Loading",
  message: "",
  active: false,
};

export const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    createMessage: (state, action: PayloadAction<MessageSlice>) => {
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.active = action.payload.active;
    },
  },
});

export const { createMessage } = messageSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default messageSlice.reducer;
