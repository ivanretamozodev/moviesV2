import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get(
            'https://api.themoviedb.org/3/movie/550?api_key=d387e46ea17a2bbb7d6b5aa86da445df'
        );
    }
}
