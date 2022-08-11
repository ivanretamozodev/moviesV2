import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
    exports: [CarouselModule, TabViewModule, ImageModule, PaginatorModule]
})
export class PrimeNGModule {}
