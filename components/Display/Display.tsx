"use client";
import { LightIcon, MoonIcon } from "../Icons";
import { useContext } from "react";
import { SettingsContext } from "@/contexts/SettingsContext";

const Display = () => {
  const {darkMode, toggleDarkMode} = useContext(SettingsContext)

  return (
    <>
      <label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
          className="sr-only"
        />
        <div className="shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-md bg-white">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              !darkMode ? "bg-blue-700 text-white" : "text-gray-900"
            }`}
          >
           <LightIcon />
          </span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              darkMode ? "bg-blue-700 text-white" : "text-gray-900"
            }`}
          >
            <MoonIcon />
          </span>
        </div>
      </label>
    </>
  );
};

export default Display
