import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MovieDto, Movie, MovieVideos, MovieVideo } from '../interfaces/Movie';
import { of, switchMap } from 'rxjs';

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
}
