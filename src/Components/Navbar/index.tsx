"use client";

import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./styles.module.scss";
import { NAV_LINKS } from "@/static/renderData";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { ArrowRightToLine, X } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/kandinsky-download-1703842652776 (1).png";
import { useAppDispatch, useAppSelector } from "@/static/hooks";
import { toggleNavbar } from "@/store/Slices/MainSlice";

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const DynamicThemeSwitcher = dynamic(() => import(".././ThemeSwitcher"), {
  ssr: false,
});

function Navbar() {
  const router = usePathname();

  const { navbarIsOpen } = useAppSelector((state) => state.mainSlice);

  const dispatch = useAppDispatch();

  const toggleNavbarLocal = () => {
    dispatch(toggleNavbar());
  };

  return (
    <div className={`bg--default flex items-center pl-[10px] ${styles.navWrap} w-full ${!navbarIsOpen ? "max-w-[330px]" : "max-w-[90px]"}`}>
      <nav className={`bg--navbar h-[98vh] w-full py-6 border--color rounded-xl ${styles.navbar} ${navbarIsOpen ? styles.small : ""} relative`}>
        <Link href={"/"} className={`text--colors_primary text-6xl font-bold pl-2 mb-[150px] flex items-center ${poppins.className}`}>
          <Image src={logo} alt="Animiru" width={60} height={60} />
          <p className={`${navbarIsOpen ? "opacity-0 invisible" : ""} transition delay-75`}>animiru</p>
        </Link>
        <button onClick={toggleNavbarLocal} className={`text--colors_default absolute right-[-20px] top-[120px] w-[40px] h-[40px] bg--navbar flex items-center justify-center rounded-full ${styles.openBtn}`}>
          {navbarIsOpen ? <ArrowRightToLine size={18} /> : <X size={18} />}
        </button>
        <div className={`${styles.menu} flex flex-col gap-2`}>
          {NAV_LINKS.map((link, index) => (
            <Link href={link.link} key={index} className={`text--colors_default flex gap-4 p-4 ${styles.link} ${router === link.link ? styles.active : ""}`}>
              <link.icon className="w-6 h-6 min-w-[24px]" />
              <p className={`${navbarIsOpen ? "opacity-0" : ""} transition`}>{link.title}</p>
            </Link>
          ))}
        </div>
        <DynamicThemeSwitcher />
      </nav>
    </div>
  );
}
export default Navbar;
