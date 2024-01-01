"use client";

import { TPropsCustomInput } from "@/static/types";
import styles from "./styles.module.scss";

function CustomInput(props: TPropsCustomInput) {
  return <input style={{ width: props.width || "" }} {...props} onChange={(e) => props.onChange(e.target.value)} type={props.type || "text"} disabled={props.disabled || false} className={`rounded-xl border--color bg--navbar w-[400px]  ${styles.input}`} />;
}

export default CustomInput;
