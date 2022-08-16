import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { ItemBannerComponent } from './components/item-banner/item-banner.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { PrimeNGModule } from './primeNg/prime-ng.module';
import { VideoTabComponent } from './components/video-tab/video-tab.component';
import { GenresComponent } from './pages/genres/genres.component';
import { TvShowsComponent } from './pages/tv-shows/tv-shows.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        MoviesComponent,
        SliderComponent,
        ItemBannerComponent,
        MovieItemComponent,
        MovieDetailComponent,
        VideoTabComponent,
        GenresComponent,
        TvShowsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        PrimeNGModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
