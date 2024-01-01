import { LOGIN_NAV } from "@/static/renderData";
import styles from "./styles.module.scss";
import { useState } from "react";
import { X } from "lucide-react";
import InputWrap from "../custom/InputWrap/InputWrap";
import { useAppDispatch } from "@/static/hooks";
import { login } from "@/store/Slices/AuthSlice";
import { authUser } from "@/static/authUser";
import { createMessage } from "@/store/Slices/MessageSlice";

function LoginModal({ onClose }: { onClose: () => void }) {
  const [activeLoginType, setActiveLoginType] = useState(LOGIN_NAV[0]);

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");

  const LoginButtonClick = () => {
    try {
      const response = authUser({ email, password });
      dispatch(login(response));
      dispatch(
        createMessage({
          type: "Success",
          message: "Вы успешно авторизовались",
          active: true,
        })
      );
      onClose();
    } catch (error: any) {
      if (error) {
        dispatch(
          createMessage({
            message: error.message,
            type: "Error",
            active: true,
          })
        );
      }
    }
  };

  return (
    <div className="fixed w-full h-full left-0 bottom-0 flex items-center justify-center z-20">
      <span onClick={onClose} className="absolute w-full h-full top-0 bg-black/30 left-0 blur-xl" />
      <div className={`${styles.content} relative p-[20px] rounded-xl bg--default max-w-[500px] w-full border--color`}>
        <button onClick={onClose} className="absolute top-[-16px] right-[-16px] text--colors_default w-[35px] h-[35px] flex items-center justify-center bg--default rounded-full">
          <X size={20} />
        </button>
        <div className="text-[24px] font-bold mb-[30px] text-center text--colors_default">{activeLoginType === "Войти" ? "Вход" : "Регистрация"}</div>
        <div className="flex flex-col gap-[10px]">
          <InputWrap width="100%" title="Email" placeholder="Введите e-mail" value={email} onChange={setEmail} />
          <InputWrap width="100%" title="Пароль" placeholder="Введите пароль" type={passwordType} value={password} onChange={setPassword} />
        </div>
        <button onClick={() => setPasswordType(passwordType === "password" ? "text" : "password")} className="text--colors_primary text-[12px] ml-auto block mt-[5px]">
          {passwordType === "password" ? "Показать" : "Скрыть"} пароль
        </button>
        <button onClick={LoginButtonClick} disabled={!email.trim() || !password.trim()} className={`w-full py-[13px] px-[20px] text-[16px] mt-[20px] border border-amber-500 text-amber-500 rounded-xl ${styles.loginBtn}`}>
          {activeLoginType}
        </button>
        {/* <div className="flex items-center gap-[10px] justify-center">
          {LOGIN_NAV.filter((temp) => temp !== activeLoginType).map((item, index) => (
            <button className={`${activeLoginType === item ? "text--colors_default " : "text--colors_primary"} `} onClick={() => setActiveLoginType(item)} key={index}>
              {item}
            </button>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default LoginModal;
