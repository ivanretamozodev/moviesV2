import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
    exports: [CarouselModule, TabViewModule, ImageModule]
})
export class PrimeNGModule {}
