import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { TabViewModule } from 'primeng/tabview';
import { PaginatorModule } from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
    exports: [CarouselModule, TabViewModule, ImageModule, PaginatorModule,InputTextModule]
})
export class PrimeNGModule {}
