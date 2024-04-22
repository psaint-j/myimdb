"use client";
import { useParams } from "next/navigation";
import useMovieDetails from "@/hooks/useMovieDetails";
import Title from "@/components/Title/Title";
import MovieCard from "@/components/ImageCard";
import Rating from "@/components/Rating";
import Image from "next/image";
import Link from "next/link";
import { CastCarousel } from "@/components/Carousel";
import { IMDB_BASE_URL } from "@/constants";

const Movies = () => {
  const { id } = useParams();
  const movieId = Array.isArray(id) ? id[0] : id;
  const { movie, cast, isLoading } = useMovieDetails(movieId);
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center">Chargement...</div>
    );
  }
  return (
    <main className="flex flex-col items-center justify-between p-10 md:p-20">
      <div className="w-full min-h-screen md:container md:mx-auto">
        <Title
          title={movie?.title}
          date={movie?.release_date}
          genre={movie?.genres}
        />
        <div className="flex flex-col md:flex-row gap-4">
          {movie && (
          <div className="flex flex-col gap-4">
            <MovieCard
              showInfo={false}
              hover={false}
              movie={movie}
              className="w-[300px] h-[450px]"
            />
          {movie?.vote_average && <Rating vote={movie?.vote_average} />}
          </div>
          )}
          <div className="flex flex-col gap-2">
            {movie?.tagline && <p>{`"${movie?.tagline}"`}</p>}
            {movie?.overview && (
              <p className="max-w-xl">
                <strong>Résumé du film</strong> - {movie?.overview}
              </p>
            )}

            <div className="flex flex-col underline text-blue-400">
              {movie?.homepage && (
                <Link target="_blank" href={movie.homepage}>
                  Lien vers le site du film
                </Link>
              )}
              {movie?.imdb_id && (
                <Link
                  target="_blank"
                  href={`${IMDB_BASE_URL}${movie?.imdb_id}`}
                >
                  Lien vers la page IMDB
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="mt-4 h-[300px] md:h-[350px] flex w-full">
          {cast && cast.length > 0 && (
            <CastCarousel
              slideClass="h-[300px] md:h-[350px]"
              cast={cast}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Movies;
