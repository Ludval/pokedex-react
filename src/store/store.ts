import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from './Pokemon.store';
import teamReducer from './Team.store';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    team: teamReducer
  }
});

export type AppDispatch = typeof store.dispatch;
