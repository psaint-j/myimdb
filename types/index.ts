export type MovieType = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};


export type PeopleType = {
  adult: boolean;
  also_known_as: string[];
  biography: string;
  birthday: string;
  deathday: null | string;
  gender: number;
  homepage: null | string;
  id: number;
  imdb_id: string;
  known_for_department: string;
  name: string;
  job?: string;
  poster_path?: string;
  place_of_birth: string;
  popularity: number;
  profile_path: string;
  credits: CreditsMovie;
  images: {
    profiles: ImageProfile[]
  };
}

type CreditsPeople = {
  cast: PeopleType[];
  crew: PeopleType[];
}

type CreditsMovie = {
  cast: MovieType[];
  crew: MovieType[];
}

export type ImageProfile = {
  aspect_ratio: number;
  height: number;
  iso_639_1: null | string;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export type MovieDetailType = MovieType & {
    genres: [];
    homepage: string;
    imdb_id: string;
    production_companies: [];
    production_countries: [];
    runtime: number;
    spoken_languages: [];
    status: string;
    tagline: string;
    keywords: [];
    alternative_titles: [];
    credits: CreditsPeople;
    images: any;
    lists: any;
    releases: any;
    reviews: any;
    similar: any;
    translations: any;
    videos: any;
};




export type SearchParamsType = {
  page?: number;
  sort_by?: string;
};

export type SortOptionType = {
  value: string;
  label: string;
};

export type DarkModeContextType = {
  darkMode: boolean;
  displayMode: string;
  toggleDarkMode: () => void;
  toggleDisplayMode: () => void;
};

export type SVGPropsType = React.SVGProps<SVGSVGElement>
