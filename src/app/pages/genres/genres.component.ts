import { Component, OnInit } from '@angular/core';
import { Genre } from '../../interfaces/genres.interface';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
    genres: Genre[] = [];

    constructor(private movieservice: MoviesService) {}

    ngOnInit(): void {
        this.movieservice.getMoviesGenres().subscribe((genre) => (this.genres = genre));
    }
}
