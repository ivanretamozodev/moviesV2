import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/Movie';

@Component({
    selector: 'movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
    @Input() movieData!: Movie;

    constructor() {}

    ngOnInit(): void {}
}
