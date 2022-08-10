import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute, private moviesservice: MoviesService) {}

    ngOnInit(): void {
        this.activatedRoute.params.pipe(take(1)).subscribe(({ id }) => {
            if (id) {
                this.getMovieByGenre(id);
            }
        });
    }

    getMovieByGenre(id: number) {}
}
