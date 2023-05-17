import { Component } from '@angular/core';
import { AlbumModel } from '../models/albam.model';
import { AlbamsService } from '../albams.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  albams: AlbumModel[] = [];

  constructor(private albamsService: AlbamsService){}

  getAlbums(): void {
    this.albamsService.getAlbums()
      .subscribe(albams => {
        this.albams = albams
        console.log(albams)
      })
  }

  ngOnInit() {
    this.getAlbums()
  }
}
