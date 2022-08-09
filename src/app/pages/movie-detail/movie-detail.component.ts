import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieVideo, MovieImages } from '../../interfaces/Movie';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
    movieDetail: Movie | null = null;
    movieVideo: MovieVideo[] = [];
    movieImages: MovieImages | null = null;

    constructor(private activatedroute: ActivatedRoute, private movieService: MoviesService) {}

    ngOnInit(): void {
        this.activatedroute.params
            .pipe(switchMap(({ id }) => this.movieService.getMoviesDetails(id)))
            .subscribe((movie) => (this.movieDetail = movie));

        this.activatedroute.params
            .pipe(switchMap(({ id }) => this.movieService.getMoviesVideos(id)))
            .subscribe((movieVideo) => (this.movieVideo = movieVideo));

        this.activatedroute.params
            .pipe(switchMap(({ id }) => this.movieService.getMoviesImages(id)))
            .subscribe((movieImage) => (this.movieImages = movieImage));
    }
}
