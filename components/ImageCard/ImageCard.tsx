import Image from "next/image";
import { MovieType } from "@/types";
import Link from "next/link";

type Props = {
  movie: MovieType;
  className?: string;
  showInfo?: boolean;
  hover?: boolean;
};

const ImageCard = ({ movie, className, showInfo = true, hover = true }: Props) => {
  return (
    <Link href={movie ? `/movies/${movie.id}` : {}}>
      <div
        className={`h-full w-full group relative rounded-lg overflow-hidden shadow-sm ${hover && "transition-transform duration-200 transform hover:delay-200 hover:z-10 md:hover:scale-125 cursor-pointer"}  ${className}`}
      >
        {movie?.poster_path ? (
          <Image
            alt="poster"
            width={300}
            height={450}
            priority
            className={`object-cover w-full h-full  ${hover && "duration-200 hover:delay-200"}`}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}w300${movie.poster_path}`}
          />
        ) : (
          <div className="w-full h-full bg-gray-700"></div>
        )}
        {showInfo && (
          <>
            <div className="absolute bottom-5 z-10 w-full flex px-8">
              <p className="truncate text-white">{movie.title}</p>
            </div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black via-black/40 to-transparent" />
          </>
        )}
      </div>
    </Link>
  );
};

export default ImageCard;
