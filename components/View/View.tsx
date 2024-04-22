"use client";
import { GridIcon, ListIcon } from "../Icons";
import { useContext } from "react";
import { SettingsContext } from "@/contexts/SettingsContext";

const View = () => {
  const {displayMode, toggleDisplayMode} = useContext(SettingsContext)
const toggle = displayMode === "grid"  

  return (
    <>
      <label className="themeSwitcherThree relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={toggle}
          onChange={toggleDisplayMode}
          className="sr-only"
        />
        <div className="shadow-card flex h-[46px] w-[82px] items-center justify-center rounded-md bg-white">
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              !toggle ? "bg-blue-700 text-white" : "text-gray-900"
            }`}
          >
           <ListIcon />
          </span>
          <span
            className={`flex h-9 w-9 items-center justify-center rounded ${
              toggle ? "bg-blue-700 text-white" : "text-gray-900"
            }`}
          >
            <GridIcon />
          </span>
        </div>
      </label>
    </>
  );
};

export default View
