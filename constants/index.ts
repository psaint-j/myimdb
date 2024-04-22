import { SortOptionType } from "@/types";

export const SortOptions: SortOptionType[] = [
    { value: "popularity.desc", label: "Popularité décroissante" },
    { value: "popularity.asc", label: "Popularité croissante" },
    { value: "release_date.asc", label: "Date de sortie croissante" },
    { value: "release_date.desc", label: "Date de sortie décroissante" },
    { value: "revenue.asc", label: "Revenus croissants" },
    { value: "revenue.desc", label: "Revenus décroissants" },
    { value: "primary_release_date.asc", label: "Date de première sortie croissante" },
    { value: "primary_release_date.desc", label: "Date de première sortie décroissante" },
    { value: "original_title.asc", label: "Titre original croissant" },
    { value: "original_title.desc", label: "Titre original décroissant" },
    { value: "vote_average.asc", label: "Note moyenne croissante" },
    { value: "vote_average.desc", label: "Note moyenne décroissante" },
    { value: "vote_count.asc", label: "Nombre de votes croissant" },
    { value: "vote_count.desc", label: "Nombre de votes décroissant" }
  ];

export const IMDB_BASE_URL = "https://www.imdb.com/title/"