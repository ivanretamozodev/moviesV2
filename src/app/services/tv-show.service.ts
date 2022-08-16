import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TvDto } from '../interfaces/tv.interface';
import { of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TvShowService {
    baseUrl: string = environment.baseUrl;
    apiKey: string = environment.apiKey;
    constructor(private http: HttpClient) {}

    getTvs(type: string = 'popular', count: number = 20) {
        return this.http.get<TvDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`).pipe(
            switchMap((res) => {
                return of(res.results.slice(0, count));
            })
        );
    }
}
