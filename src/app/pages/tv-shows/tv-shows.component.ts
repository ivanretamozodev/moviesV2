import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { Tv } from '../../interfaces/tv.interface';

@Component({
    selector: 'app-tv-shows',
    templateUrl: './tv-shows.component.html',
    styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
    shows: Tv[] = [];

    constructor(private tvshow: TvShowService) {}

    ngOnInit(): void {
        this.tvshow.getTvs().subscribe((tv) => (this.shows = tv));
        console.log(this.shows);
    }

    getPagedTvs(pageNum: number) {
        this.tvshow.searchTvs(pageNum).subscribe((tv) => (this.shows = tv));
    }

    paginate(event: any) {
        const pageNumber = event.page + 1;
        this.getPagedTvs(pageNumber);
    }
}
