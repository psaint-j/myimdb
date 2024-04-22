"use client";
import { ReactNode, createContext, useState } from "react";
import { SettingsContextType } from "@/types";

type SettingsContextProps = {
  children: ReactNode;
};

const SettingsContext = createContext<SettingsContextType>({
  darkMode: false,
  displayMode: "grid",
  toggleDarkMode: () => {},
  toggleDisplayMode: () => {},
});

const SettingsContextProvider = ({ children }: SettingsContextProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [displayMode, setDisplayMode] = useState("grid");

  const toggleDisplayMode = () => {
    setDisplayMode(displayMode === "grid" ? "list" : "grid");
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <SettingsContext.Provider
      value={{ darkMode, toggleDarkMode, displayMode, toggleDisplayMode }}
    >
      <body
        className={`${
          darkMode ? "dark-mode dark" : "light-mode light"
        } transition-colors ease-in-out duration-300 `}
      >
        {children}
      </body>
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextProvider };
