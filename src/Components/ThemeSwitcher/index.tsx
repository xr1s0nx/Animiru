"use client";

import { Moon, Sun } from "lucide-react";
import React, { useState, useEffect, useLayoutEffect } from "react";

function ThemeSwitcher() {
  const storedTheme = window.localStorage.getItem("prefered-theme");

  const checkTheme = () => {
    if (storedTheme === "darkTheme") {
      return false;
    }
    return true;
  };

  const [isLight, setIsLight] = useState(checkTheme);

  function setLightTheme() {
    setIsLight(true);
    window.localStorage.setItem("prefered-theme", "lightTheme");
  }

  function setDarkTheme() {
    setIsLight(false);
    window.localStorage.setItem("prefered-theme", "darkTheme");
  }

  useLayoutEffect(() => {
    const setTheme = () => {
      const root = window.document.documentElement;
      const operatingSystemThemeDark = window.matchMedia("(prefers-color-scheme: dark)");
      if (storedTheme === "darkTheme" && operatingSystemThemeDark.matches) {
        root.classList.add("dark");
      }
      if (storedTheme === "darkTheme") {
        root.classList.add("dark");
      }
      if (storedTheme === "lightTheme") {
        root.classList.remove("dark");
      }
    };
    setTheme();
  }, [storedTheme]);

  return (
    <div className="theme-switcher items-center absolute bottom-4 left-4">
      <button
        type="button"
        className={`dark-mode-switch cursor-pointerw-[40px] h-[40px] p-[10px] rounded-[100%]
        ${!isLight && "hidden"}`}
        onClick={setDarkTheme}
      >
        <Moon className="color--switcher" />
      </button>
      <button
        type="button"
        className={`light-mode-switch cursor-pointer w-[40px] h-[40px] p-[10px] rounded-[100%]
        ${isLight && "hidden"}`}
        onClick={setLightTheme}
      >
        <Sun className="color--switcher" />
      </button>
    </div>
  );
}
export default ThemeSwitcher;
