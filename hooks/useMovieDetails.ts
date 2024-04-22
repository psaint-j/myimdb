"use client"

import useSWR from 'swr';
import { MovieDetailType } from '@/types';

function useMovieDetails(id: string) {
    const { data, error } = useSWR<MovieDetailType>(`movie/${id}?language=fr-FR&append_to_response=keywords,alternative_titles,changes,credits,images,keywords,lists,releases,reviews,similar,translations,videos`);

    const directors = data?.credits?.crew?.filter((member) => member.job === 'Director') || [];
    const combinedCast = [...directors, ...data?.credits?.cast || []];
    
    return {
        movie: data,
        cast: combinedCast,
        isLoading: !error && !data,
        isError: error
    };
}

export default useMovieDetails;