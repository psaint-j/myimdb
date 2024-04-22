"use client"

import useSWR from 'swr';

function useMovies(query: string) {
    const { data, error } = useSWR(`discover/movie?language=fr-FR&include_adult=false&include_video=false&year=2024&${query}`);
    return {
        movies: data,
        isLoading: !error && !data,
        isError: error
    };
}

export default useMovies;