import { createMessage } from "@/store/Slices/MessageSlice";
import { useAppDispatch } from "./hooks";

export const createMessageFunc = (type: "Error" | "Loading" | "Success", message: string) => {
  const dispatch = useAppDispatch();

  dispatch(createMessage({ type, message, active: true }));
};
