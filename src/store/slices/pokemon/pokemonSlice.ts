import { createSlice } from '@reduxjs/toolkit'
import { PokemonsFetchType, setPokemons } from '.';
//import type { PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  page: number;
  pokemons: PokemonsFetchType;
  isLoading: boolean;
}

const initialState: PokemonsState = {
    page: 0,
    pokemons: {} as PokemonsFetchType,
    isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase( setPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase( setPokemons.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pokemons = action.payload;
      })
  }
})

export default pokemonSlice.reducer;
export const { startLoadingPokemons } = pokemonSlice.actions;
