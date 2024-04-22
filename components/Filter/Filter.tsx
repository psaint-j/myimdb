"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { SortOptions } from "@/constants";

const Filter = () => {
  const router = useRouter();
  const [selectedSort, setSelectedSort] = useState("");
  const searchParams = useSearchParams();


  useEffect(() => {
    const initialSort = searchParams.get("sort_by") || "";
    setSelectedSort(initialSort);
  }, [searchParams]);

  const handleSortChange = (event: { target: { value: string } }) => {
    const url = new URL(window.location.href);
    url.searchParams.set("sort_by", event.target.value);
    router.push(url.href);
  };

  return (
    <div className="flex justify-end py-8 w-full">
      <select
        value={selectedSort}
        className="py-3 px-4 pe-9 md:w-72 h-10 block w-full border-gray-200 rounded-lg text-sm text-gray-600 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-black dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        onChange={handleSortChange}
      >
        {SortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
