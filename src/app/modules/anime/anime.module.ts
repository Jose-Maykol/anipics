import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimeRoutingModule } from './anime-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AnimeService } from '../../core/services/anime.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AnimeRoutingModule,
    HttpClientModule
  ],
  providers: [
    AnimeService
  ]
})
export class AnimeModule { }
