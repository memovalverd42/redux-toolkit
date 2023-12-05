import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    pokemons: pokemonSlice.reducer
  },
  middleware: [thunk]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
