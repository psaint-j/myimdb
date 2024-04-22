import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { PeopleType } from "@/types";

type PropsType = {
  cast: PeopleType[];
  slideClass?: string;
};

const CastCarousel = ({ cast, slideClass }: PropsType) => {
  if (cast.length < 5) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 w-full">
        {cast.map((el, index) => (
          <Link
          key={`${el.id}${index}`}
          href={`/people/${el.id}`}
          className={`h-full group w-auto group relative rounded-lg overflow-hidden shadow-sm
          ${slideClass}`}
        >
          {el.profile_path && el.profile_path !== null ? (
            <>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}w185${el.profile_path}`}
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
              <p className="truncate text-white">{el.name}</p>
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
      {cast.map((el, index) => (
        <SwiperSlide key={`${el.id}${index}`} >
          <Link
            href={`/people/${el.id}`}
            className={`group h-full w-auto group relative rounded-lg overflow-hidden shadow-sm
            ${slideClass}`}
          >
            {el.profile_path && el.profile_path !== null ? (
              <>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}w185${el.profile_path}`}
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
                <p className="truncate text-white">{el.name}</p>
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

export default CastCarousel;
