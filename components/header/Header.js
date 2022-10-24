import React, { useEffect, useState } from "react";
import {
  MoonIcon,
  SunIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  //   User prefrence is stored in local storage and checked when the component is loaded
  useEffect(() => {
    if (localStorage.getItem("betterscreensort_darklover") === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  function changeTheme() {
    if (isDarkMode) {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
      localStorage.setItem("betterscreensort_darklover", false);
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
      localStorage.setItem("betterscreensort_darklover", true);
    }
  }
  return (
    <div className="w-full flex items-center relative justify-between p-6 text-yellow-900 dark:text-yellow-300">
      <span className="flex items-center">
        {/* <img src="/logo.png" alt="" className="w-6 sm:w-8 h-6 sm:h-8 mr-2" /> */}
        <p className="text-2xl sm:text-4xl font-medium text-zinc-300 cursive rounded-md px-1">
          SPIFFY
        </p>
      </span>
      <div className="absolute right-6 flex">
        <button
          className="active:scale-75 transition-transform ease-in-out outline-none sm:mr-4"
          onClick={changeTheme}
        >
          {isDarkMode ? (
            <SunIcon className="w-7 stroke-[2] mr-0.5" />
          ) : (
            <MoonIcon className="w-7 stroke-[2] fill-yellow-300" />
          )}
        </button>
        <a
          href="https://github.com/VishwaGauravIn/better-screenshots"
          className="flex justify-center items-center p-3 px-6 bg-yellow-300 text-yellow-900 font-bold rounded-full shadow-lg hover:shadow-yellow-300/30 sm:hover:scale-[1.02] transition-all ease-in-out duration-100 scale-75 -mr-6 md:mr-0 sm:scale-100 outline-none ring ring-yellow-900 dark:ring-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <ArrowTopRightOnSquareIcon className="w-6 ml-2 stroke-2" />
        </a>
      </div>
    </div>
  );
}
