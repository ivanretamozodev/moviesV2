import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-video-tab',
    templateUrl: './video-tab.component.html',
    styleUrls: ['./video-tab.component.scss']
})
export class VideoTabComponent implements OnInit {
    @Input() site: string = 'YouTube';
    @Input() key: string | null = null;
    videoUrl: SafeResourceUrl = '';

    constructor(private sanitizer: DomSanitizer) {}

    ngOnInit(): void {
        this.videoUrl = this.getUrlSafe('https://www.youtube.com/embed/' + this.key);
    }

    getUrlSafe(url: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
