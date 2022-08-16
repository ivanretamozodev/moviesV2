import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/Movie';
import { Tv } from '../../interfaces/tv.interface';

@Component({
    selector: 'movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
    @Input() movieData!: Movie | Tv;

    constructor() {}

    ngOnInit(): void {}
}
