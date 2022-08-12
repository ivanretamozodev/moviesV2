import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MovieDto, Movie, MovieVideos, MovieImages, MovieCredits } from '../interfaces/Movie';
import { of, switchMap } from 'rxjs';
import { Genres } from '../interfaces/genres.interface';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    apiKey: string = environment.apiKey;
    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getMovies(endpoint: string = 'upcoming', count: number = 12) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/movie/${endpoint}?api_key=${this.apiKey}&language=es-MX`
            )
            .pipe(switchMap((resp) => of(resp.results.slice(0, count))));
    }

    getMoviesDetails(id: string) {
        return this.http.get<Movie>(
            `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=es-MX`
        );
    }

    getMoviesVideos(id: string) {
        return this.http
            .get<MovieVideos>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
            .pipe(
                switchMap((resp) => {
                    return of(resp.results);
                })
            );
    }

    getMoviesImages(id: string) {
        return this.http.get<MovieImages>(
            `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
        );
    }

    getMoviesCredits(id: string) {
        return this.http.get<MovieCredits>(
            `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
        );
    }

    getMoviesGenres() {
        return this.http
            .get<Genres>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=es-MX`)
            .pipe(switchMap((resp) => of(resp.genres)));
    }

    getMoviesByGenre(genreId: string, pageNumber: number) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}&language=es-MX `
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    searchMovies(page: number) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}&language=es-MX`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }
}
