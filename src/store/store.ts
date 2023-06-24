import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './Pokemon.store';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer
  }
});

export type AppDispatch = typeof store.dispatch;
