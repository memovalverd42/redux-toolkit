import { createAsyncThunk } from '@reduxjs/toolkit';

export interface PokemonsFetchType {
  count:    number;
  next:     string;
  previous: null;
  results:  Result[];
}

export interface Result {
  name: string;
  url:  string;
}

export const setPokemons = createAsyncThunk(
  "pokemons/setPokemons",
  async ( page: number = 1 ) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 10}`);
    const data = await response.json() as PokemonsFetchType;
    return data;
  }
);

