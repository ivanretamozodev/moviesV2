import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie, MovieVideo, MovieImages, MovieCredits } from '../../interfaces/Movie';
import { first, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
    styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit, OnDestroy {
    movieDetail: Movie | null = null;
    movieVideo: MovieVideo[] = [];
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;

    constructor(private activatedroute: ActivatedRoute, private movieService: MoviesService) {}

    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }

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

        this.activatedroute.params
            .pipe(switchMap(({ id }) => this.movieService.getMoviesCredits(id)))
            .subscribe((moviecredits) => (this.movieCredits = moviecredits));
    }
}
