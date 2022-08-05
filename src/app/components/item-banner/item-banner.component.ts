import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/Movie';

@Component({
    selector: 'item-banner',
    templateUrl: './item-banner.component.html',
    styleUrls: ['./item-banner.component.scss']
})
export class ItemBannerComponent implements OnInit {
    @Input() category: string = '';
    @Input() items: Movie[] = [];

    constructor() {}

    ngOnInit(): void {}
}
