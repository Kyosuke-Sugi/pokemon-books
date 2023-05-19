import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from '../pokemons.service';
import { PokemonDetailModel } from '../models/pokemons.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent {
  id: string | null = '';
  pokeInfo: PokemonDetailModel | undefined;
  types: string[] = [];
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((map) => {
      this.id = map.get('id');
      console.log(this.id);
    });
    this.getPokemon(this.id);
  }

  getPokemon(id: string | null) {
    this.pokemonService.getPokemon(this.id).subscribe((pokemon) => {
      this.pokeInfo = pokemon;
      for (let info of pokemon.types) this.types.push(info.type.name);
    });
  }
}
