"use client";

import { useState } from "react";
import SignBtn from "@/Components/SignBtn/SignBtn";
import CustomInput from "../custom/CustomInput/CustomInput";
import styles from "./styles.module.scss";
import { useAppSelector } from "@/static/hooks";

function Header({ setSignModal }: { setSignModal: () => void }) {
  const [searchValue, setSearchValue] = useState("");

  const { navbarIsOpen } = useAppSelector((state) => state.mainSlice);

  return (
    <header className={`fixed w-full top-0 right-0 py-[20px] pr-[18px]`} style={{ maxWidth: !navbarIsOpen ? "calc(100vw - 350px)" : "calc(100vw - 110px)", zIndex: "80", transition: ".2s" }}>
      <span className={`absolute w-full h-full top-0 left-0 bg--default ${styles.bg}`} />
      <div className={`${styles.wrap}  flex justify-between items-center `}>
        <CustomInput placeholder="Поиск" value={searchValue} onChange={setSearchValue} />
        <SignBtn onClick={setSignModal} />
      </div>
    </header>
  );
}

export default Header;
