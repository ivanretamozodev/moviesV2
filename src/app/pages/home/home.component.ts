import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/Movie';
import { MoviesService } from '../../services/movies.service';
import { TvShowService } from '../../services/tv-show.service';
import { Tv } from '../../interfaces/tv.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];

    constructor(private moviesService: MoviesService, private tvshow: TvShowService) {}

    ngOnInit(): void {
        this.moviesService.getMovies('popular').subscribe((movies) => {
            this.popularMovies = movies;
        });
        this.moviesService.getMovies('upcoming').subscribe((movies) => {
            this.upcomingMovies = movies;
        });
        this.moviesService.getMovies('top_rated').subscribe((movies) => {
            this.topRatedMovies = movies;
        });
    }
}
