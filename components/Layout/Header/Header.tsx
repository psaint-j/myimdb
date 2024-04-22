"use client";
import Link from "next/link";
import { useContext } from "react";
import { DarKModeContext } from "@/contexts/DarkModeContext";
import { usePathname } from "next/navigation";
import { MovieIcon } from "@/components/Icons";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarKModeContext);
  const url = usePathname()
  const showGoBackToList = /^\/(movie|people)/.test(url);

  return (
    <header className="border-b border-gray-800 bg-gray-900 flex overflow-x-hidden">
      <div className="container mx-auto flex items-center justify-between px-10 md:px-8 py-4 sm:py-6">
        <Link href="/">
          <MovieIcon className="fill-red-500 size-8" />
        </Link>
        <div className="flex items-center gap-4">
          {showGoBackToList && <Link className="text-white" href="/">Retour à la liste</Link>}
          <div className="relative inline-block w-7 h-4 rounded-full cursor-pointer">
            <input
              id="switch-component"
              type="checkbox"
              value={darkMode as unknown as string}
              onChange={toggleDarkMode}
              className="absolute w-8 h-4 transition-colors duration-300 rounded-full appearance-none cursor-pointer peer bg-blue-gray-100 checked:bg-gray-700 peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
            />
            <label
              htmlFor="switch-component"
              className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-gray-900 peer-checked:before:bg-gray-900"
            >
              <div
                className="inline-block p-5 rounded-full top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
                data-ripple-dark="true"
              ></div>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
