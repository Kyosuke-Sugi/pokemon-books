import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailModel, PokemonsModel } from './models/pokemons.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private pokemonsUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<PokemonsModel> {
    return this.http.get<PokemonsModel>(this.pokemonsUrl);
  }

  getPokemon(id: string | null): Observable<PokemonDetailModel> {
    return this.http.get<PokemonDetailModel>(this.pokemonsUrl + `/${id}`);
  }
}
