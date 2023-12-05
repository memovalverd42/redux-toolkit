import { createSlice } from '@reduxjs/toolkit'
//import type { PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
    page: number;
    pokemons: any[];
    isLoading: boolean;
}

const initialState: PokemonsState = {
    page: 0,
    pokemons: [],
    isLoading: false
}

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
        state.isLoading = true;
    },
    setPokemons: (state, action) => {
        console.log(action);
    }
  },
})

export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
