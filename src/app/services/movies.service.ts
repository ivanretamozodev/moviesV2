import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    apiKey: string = environment.apiKey;
    baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get(
            `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&language=es-MX`
        );
    }
}
