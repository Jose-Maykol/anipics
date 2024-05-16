import { Component, OnInit } from '@angular/core';
import { ListAnimePicture } from '../../../../core/models/anime';
import { Observable } from 'rxjs';
import { AnimeService } from '../../../../core/services/anime.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';

@Component({
  selector: 'app-anime-pictures',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    NgxMasonryModule
  ],
  templateUrl: './anime-pictures.component.html',
  styleUrl: './anime-pictures.component.css'
})
export class AnimePicturesComponent implements OnInit {
  public animePictures$! : Observable<ListAnimePicture>;
  constructor(private service: AnimeService) { }

  ngOnInit() {
    this.animePictures$ = this.service.getList();
  }
}
