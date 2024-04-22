"use client"


import { useContext } from "react";
import { DarKModeContext } from "@/contexts/DarkModeContext";
import { useRouter } from 'next/navigation';

type PaginationType = {
  currentPage: number;
  totalPages: number;
};
const Pagination = ({ currentPage, totalPages }: PaginationType) => {
  const { darkMode } = useContext(DarKModeContext);
  const router = useRouter();
  const buttonStyles = darkMode
    ? "border border-gray-50"
    : "border border-gray-900";

    const goToPage = (page: number) => {
      const url = new URL(window.location.href);
      url.searchParams.set('page', String(page));
      router.replace(url.href)
    };

  return (
    <div
      className={`flex items-center gap-8 ${
        darkMode ? "text-gray-50" : "text-gray-900 "
      }`}
    >
      <button
        onClick={() => goToPage(currentPage - 1)}
        className={`relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg ${buttonStyles} text-center align-middle font-sans text-xs font-medium uppercase transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        type="button"
        aria-label="previous"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            ></path>
          </svg>
        </span>
      </button>
      <p className="block font-sans text-base antialiased font-normal leading-relaxed">
        Page <strong>{currentPage}</strong>sur{" "}
        <strong>{totalPages}</strong>
      </p>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg ${buttonStyles} text-center align-middle font-sans text-xs font-medium uppercase  transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        type="button"
        aria-label="next"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            ></path>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Pagination;
