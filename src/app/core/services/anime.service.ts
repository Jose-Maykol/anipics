import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListAnimePicture } from '../models/anime';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(
    private http: HttpClient
  ) { }

  getList(): Observable<ListAnimePicture> {
    return this.http.get<ListAnimePicture>('https://nekos.best/api/v2/waifu?amount=20');
  }
}
