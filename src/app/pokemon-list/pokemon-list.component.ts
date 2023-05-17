import { Component } from '@angular/core';
import { PokemonsModel, ResultModel } from '../models/pokemons.model';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent {
  pokemons: ResultModel[] = []

  constructor(private pokemonsService: PokemonsService){}

  getPokemons(): void {
    this.pokemonsService.getPokemons()
      .subscribe(pokemons => {
        console.log(pokemons);
        this.pokemons = pokemons.results;
      })
  }

  ngOnInit() {
    this.getPokemons()
  }
}
