import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../interfaces/Movie';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];
    genreId: string | null = null;
    searchBinding: string | null = null;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
            if (genreId) {
                this.genreId = genreId;
                this.getMoviesByGenre(genreId, 1);
            } else {
                this.getPagedMovies(1);
            }
        });
    }

    getPagedMovies(page: number, search?: string) {
        this.moviesService.searchMovies(page, search).subscribe((movies) => {
            this.movies = movies;
        });
    }

    getMoviesByGenre(genreId: string, page: number) {
        this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
            this.movies = movies;
        });
    }

    paginate(event: any) {
        const pageNumber = event.page + 1;

        if (this.genreId) {
            this.getMoviesByGenre(this.genreId, pageNumber);
        } else {
            if (this.searchBinding) {
                this.getPagedMovies(pageNumber, this.searchBinding);
            } else {
                this.getPagedMovies(pageNumber);
            }
        }
    }
    changeSearch() {
        if (this.searchBinding) {
            this.getPagedMovies(1, this.searchBinding);
        }
    }
}
