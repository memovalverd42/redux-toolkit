import { createAsyncThunk } from '@reduxjs/toolkit';
import { pokemonApi } from '../../../api/pokemonApi';

export interface PokemonsFetchType {
  count:    number;
  next:     string;
  previous: null;
  results:  Pokemons[];
} 

export interface Pokemons {
  name: string;
  url:  string;
}

export const setPokemons = createAsyncThunk(
  "pokemons/setPokemons",
  async ( page: number = 1 ) => {
    const resp = await pokemonApi.get<PokemonsFetchType>(`/pokemon?limit=10&offset=${(page - 1) * 10}`);
    return resp.data.results;
  }
);

