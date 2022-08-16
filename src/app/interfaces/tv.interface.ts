import { Movie } from './Movie';

export interface Tv extends Movie {
    name: string;
    original_name: string;
}

export interface TvDto {
    page: number;
    results: Tv[];
    total_results: number;
    total_pages: number;
}
