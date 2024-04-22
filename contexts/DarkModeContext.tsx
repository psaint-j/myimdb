"use client";
import { ReactNode, createContext, useState } from "react";
import { DarkModeContextType } from "@/types";

type DarKModeProviderProps = {
  children: ReactNode;
};

const DarKModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  displayMode: "grid",
  toggleDarkMode: () => {},
  toggleDisplayMode: () => {},
});

const DarKModeProvider = ({ children }: DarKModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [displayMode, setDisplayMode] = useState("grid");

  const toggleDisplayMode = () => {
    setDisplayMode(displayMode === "grid" ? "list" : "grid");
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <DarKModeContext.Provider
      value={{ darkMode, toggleDarkMode, displayMode, toggleDisplayMode }}
    >
      <body
        className={`${
          darkMode ? "dark-mode dark" : "light-mode light"
        } transition-colors ease-in-out duration-300 `}
      >
        {children}
      </body>
    </DarKModeContext.Provider>
  );
};

export { DarKModeContext, DarKModeProvider };
