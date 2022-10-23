import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { FullEntryNumberPipe } from './pipes/full-entry-number.pipe';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { PokemonImgPipe } from './pipes/pokemon-img.pipe';
import { PokemonImgPngPipe } from './pipes/pokemon-img-png.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    HomeComponent,
    PokemonCardComponent,
    FullEntryNumberPipe,
    PokemonDetailsComponent,
    PokemonImgPipe,
    PokemonImgPngPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
