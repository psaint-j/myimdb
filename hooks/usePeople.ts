"use client";
import useSWR from "swr";
import { PeopleType, ImageProfile } from "@/types";

function usePeople(id: string) {
  const { data, error } = useSWR<PeopleType>(
    `person/${id}?language=fr-FR&append_to_response=credits%2Cimages`
  );

  const picture: ImageProfile | null = data?.images?.profiles?.[0] ?? null;

  return {
    people: data,
    picture,
    isLoading: !error && !data,
    isError: error,
  };
}

export default usePeople;
