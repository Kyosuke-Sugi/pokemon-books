export interface PokemonsModel {
  count: number;
  results: any[];
}

export interface ResultModel {
  name: string;
  url: string;
}

export interface PokemonDetailModel {
  abilities: any[];
  base_experience: number;
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: string;
  name: string;
  order: number;
  past_types: any[];
  species: {};
  sprites: {};
  stats: any[];
  types: any[];
  weight: number;
}
