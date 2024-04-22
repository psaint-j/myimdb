"use client";
import useSWR from "swr";
import MovieCard from "@/components/ImageCard";
import Pagination from "@/components/Pagination";
import { MovieType } from "@/types";
import { SearchParamsType } from "@/types";
import Rating from "@/components/Rating";
import Filter from "@/components/Filter";
import useMovies from "@/hooks/useMovies";
import { useContext } from "react";
import { SettingsContext } from "@/contexts/SettingsContext";

type Props = {
  searchParams: SearchParamsType;
};

export default function Home({ searchParams }: Props) {
  const queryString = Object.entries(searchParams)
    .filter(([_, value]) => value != null)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
    )
    .join("&");

  const { movies, isLoading } = useMovies(queryString);
  const { displayMode } = useContext(SettingsContext);

  if (isLoading)
    return (
      <main className="flex w-full flex-col items-center justify-between p-10 md:p-14">
        <div className="w-full md:container md:mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[...Array(18)].map((_, index) => (
              <div
                key={index}
                className="h-auto w-[300px] relative rounded-lg overflow-hidden shadow-sm transition-transform duration-200 transform hover:delay-200 hover:z-10 md:hover:scale-125 cursor-pointer"
              >
                <div className="w-full h-full bg-gray-700 animation-pulse" />
              </div>
            ))}
          </div>
        </div>
      </main>
    );

  return (
    <main className="flex w-full flex-col items-center justify-between p-10 md:p-14">
      <div className="w-full md:container md:mx-auto">
        <Filter />
        {displayMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {movies?.results &&
              movies?.results?.map((movie: MovieType) => (
                <div key={movie.id}>
                  <MovieCard movie={movie} />
                </div>
              ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {movies?.results &&
              movies?.results?.map((movie: MovieType) => (
                <>
                  <div className="md:flex md:justify-end" key={movie.id}>
                    <MovieCard hover={false} showInfo={false}  className="!h-[450px] !w-[300px]" movie={movie} />
                  </div>
                  <div className="col-span-2 flex flex-col gap-2">
                    {movie.title && <p className="text-xl font-bold">{movie.title}</p>}
                    <Rating vote={movie.vote_average} />
                    <p>{movie.overview}</p>
                  </div>
                </>
              ))}
          </div>
        )}

        <div className="w-full flex justify-end py-8">
          {!isLoading && (
            <Pagination
              currentPage={movies?.page}
              totalPages={movies?.total_pages}
            />
          )}
        </div>
      </div>
    </main>
  );
}
