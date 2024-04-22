import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { MovieType } from "@/types";

type PropsType = {
  movie: MovieType[];
  slideClass?: string;
};

const MovieCarousel = ({ movie, slideClass }: PropsType) => {
  if (movie.length < 5) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
        {movie.map((el, index) => (
          <Link
          key={`${el.id}${index}`}
          href={`/movie/${el.id}`}
          className={`h-full group w-auto group relative rounded-lg overflow-hidden shadow-sm
          ${slideClass}`}
        >
          {el.poster_path && el.poster_path !== null ? (
            <>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}w185${el.poster_path}`}
                alt="Sample"
                width={185}
                height={450}
                className="object-cover w-full h-full duration-200 rounded hover:shadow-lg"
              />
            </>
          ) : (
            <div className={`w-auto h-full bg-gray-700 ${slideClass}`} />
          )}
          <div className="relative">
            <div className="hidden group-hover:flex  absolute bottom-5 z-10 w-full flex px-8">
              <p className="truncate text-white">{el.title}</p>
            </div>
          </div>
          <div className="hidden group-hover:flex absolute inset-0 w-full h-full bg-black/60" />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-black/5 to-transparent" />
        </Link>
        ))}
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={8}
      slidesPerView={3}
      breakpoints={{
        768: {
          slidesPerView: 5,
        },
      }}
      navigation
      pagination={{ clickable: true }}
      className="w-full rounded-lg overflow-hidden "
    >
      {movie.map((el, index) => (
        <SwiperSlide key={`${el.id}${index}`} >
          <Link
            href={`/movie/${el.id}`}
            className={`group h-full w-auto group relative rounded-lg overflow-hidden shadow-sm
            ${slideClass}`}
          >
            {el.poster_path && el.poster_path !== null ? (
              <>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}w342${el.poster_path}`}
                  alt="Sample"
                  width={185}
                  height={450}
                  className="object-cover w-full h-full duration-200 rounded hover:shadow-lg"
                />
              </>
            ) : (
              <div className={`w-full h-full bg-gray-700 ${slideClass}`} />
            )}
            <div className="relative">
              <div className="hidden group-hover:flex  absolute bottom-5 z-10 w-full flex px-8">
                <p className="truncate text-white">{el.title}</p>
              </div>
            </div>
            <div className="hidden group-hover:flex absolute inset-0 w-full h-full bg-black/60" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-black/5 to-transparent" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MovieCarousel;
