import { useAppSelector, useAppDispatch } from "@/static/hooks";
import styles from "./styles.module.scss";
import { useEffect } from "react";
import { createMessage } from "@/store/Slices/MessageSlice";

function MessageBox() {
  const { active, message, type } = useAppSelector((state) => state.messageSlice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (active) {
      const timer = setTimeout(() => {
        dispatch(
          createMessage({
            message: message,
            type: "Error",
            active: false,
          })
        );
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [active]);

  return <div className={`${styles.messageBox} ${active ? styles.active : ""} ${styles[type]} fixed bottom-[10px] right-[10px]`}>{message}</div>;
}

export default MessageBox;
