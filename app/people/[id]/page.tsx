"use client";

import usePeople from "@/hooks/usePeople";
import { useParams } from "next/navigation";
import Image from "next/image";
import { MovieCarousel } from "@/components/Carousel";

const People = () => {
  const { id } = useParams();
  const peopleId = Array.isArray(id) ? id[0] : id;
  const { people, picture, isLoading } = usePeople(peopleId);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">Chargement...</div>
    );
  }

  return (
    <main className="flex flex-col items-center justify-between p-10 md:p-20">
      <div className="w-full min-h-screen md:container md:mx-auto">
        {people?.name && (
          <h1 className="md:text-2xl text-xl py-4">{`${people?.name} (${people?.known_for_department})`}</h1>
        )}
        <div className="info flex flex-col md:flex-row gap-4 w-full">
          {picture && (
            <div className="w-[300px] h-[450px] rounded-lg overflow-hidden shadow-sm">
              <Image
                alt={people?.name || "people"}
                width={picture.width}
                height={picture.height}
                priority
                className={`object-cover w-full h-full`}
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}w300${picture.file_path}`}
              />
            </div>
          )}
          <div className="md:w-[calc(100%-300px)]">
            <p>{people?.birthday} {people?.place_of_birth}</p>
            {people?.biography && <p><strong>Biographie</strong> - {people?.biography}</p>}
          </div>
        </div>
        <div className="mt-6">
          <div className="flex h-[300px] md:h-[350px]">
          {people?.credits?.cast && <MovieCarousel slideClass="h-[300px] md:h-[350px]"  movie={people?.credits.cast} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default People;
