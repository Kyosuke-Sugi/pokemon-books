import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumModel } from './models/albam.model';

@Injectable({
  providedIn: 'root'
})
export class AlbamsService {
  private albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums'
  constructor(
    private http: HttpClient
  ) { }

  getAlbums(): Observable<AlbumModel[]>{
    return this.http.get<AlbumModel[]>(this.albumsUrl)
  }

}
