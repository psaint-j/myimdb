"use client"


import { useContext } from "react";
import { SettingsContext } from "@/contexts/SettingsContext";
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight } from "../Icons";

type PaginationType = {
  currentPage: number;
  totalPages: number;
};
const Pagination = ({ currentPage, totalPages }: PaginationType) => {
  const { darkMode } = useContext(SettingsContext);
  const router = useRouter();
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages
  const buttonStyles = darkMode
    ? "border border-gray-50"
    : "border border-gray-900";

    const goToPage = (page: number) => {
      const url = new URL(window.location.href);
      url.searchParams.set('page', String(page));
      router.push(url.href)
    };

  return (
    <div
      className={`flex items-center gap-2 ${
        darkMode ? "text-gray-50" : "text-gray-900 "
      }`}
    >
      <div className="flex gap-2 items-center">
      <button
        onClick={() => goToPage(1)}
        className={`relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg ${buttonStyles} text-center align-middle font-sans text-xs font-medium uppercase transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        type="button"
        disabled={isFirstPage}
        aria-label="first"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <ChevronDoubleLeft />
        </span>
      </button>
      <button
        onClick={() => goToPage(currentPage - 1)}
        className={`relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg ${buttonStyles} text-center align-middle font-sans text-xs font-medium uppercase transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        type="button"
        disabled={isFirstPage}
        aria-label="previous"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <ChevronLeft />
        </span>
      </button>
      </div>
      <p className="flex gap-1 font-sans text-base antialiased font-normal leading-relaxed">
        Page<strong>{currentPage}</strong>sur
        <strong>{totalPages}</strong>
      </p>
      <div className="flex gap-2 items-center">
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={isLastPage}
        className={`relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg ${buttonStyles} text-center align-middle font-sans text-xs font-medium uppercase  transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        type="button"
        aria-label="next"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <ChevronRight />
        </span>
      </button>
      <button
        onClick={() => goToPage(totalPages)}
        disabled={isLastPage}
        className={`relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg ${buttonStyles} text-center align-middle font-sans text-xs font-medium uppercase  transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
        type="button"
        aria-label="last"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <ChevronDoubleRight />
        </span>
      </button>
      </div>
    </div>
  );
};

export default Pagination;
