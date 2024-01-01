import { useAppSelector } from "@/static/hooks";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Bell, ShieldCheck } from "lucide-react";

function SignBtn({ onClick }: { onClick: () => void }) {
  const { user, isAuth } = useAppSelector((state) => state.authSlice);

  return (
    <div className={styles.content}>
      {isAuth ? (
        <div className="flex items-center gap-[30px]">
          <button>
            <Bell />
          </button>
          <button className="flex items-center gap-[10px]">
            <div className={`${styles.imgWrap} w-[40px] min-h-[40px] rounded-full overflow-hidden`}>{user?.avatarUrl ? <img src={user?.avatarUrl} className="h-[40px]" alt="" /> : null}</div>
            <span className={`${user?.role === "admin" ? styles.admin : ""} flex items-center gap-[5px]`}>
              {user?.username} {user?.role === "admin" && <ShieldCheck />}
            </span>
          </button>
        </div>
      ) : (
        <button onClick={onClick} className={`w-[140px] py-[13px] rounded-xl border--color bg--navbar ${styles.signBtn}`}>
          Войти
        </button>
      )}
    </div>
  );
}

export default SignBtn;
