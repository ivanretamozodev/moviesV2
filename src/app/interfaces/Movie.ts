export interface Movie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    name?: string;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    revenue: number;
    runtime: number;
    status: string;
    genres: Genre[];
}

export enum OriginalLanguage {
    En = 'en',
    Fr = 'fr',
    Ja = 'ja'
}

export interface MovieDto {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface MovieVideos {
    id: number;
    results: MovieVideo[];
}

export interface MovieVideo {
    results: any;
    site: string;
    key: string;
}

export interface MovieImages {
    backdrops: {
        file_path: string;
    }[];
}

export interface MovieCredits {
    cast: {
        name: string;
        profile_path: string;
    }[];
}
