import { createSlice } from '@reduxjs/toolkit';
import { Pokemon } from '../interfaces/Pokemon.interface';

export const counterSlice = createSlice({
  name: 'team',
  initialState: {
    teamPokemon: Array<Pokemon | null>(6).fill(null)
  },
  reducers: {
    addPokemon: (state, action) => {
      const nbPokemon = state.teamPokemon.findIndex((pokemon) => !pokemon);

      state.teamPokemon.fill(action.payload, nbPokemon, nbPokemon + 1);
    },
    removePokemon(state, action): void {
      const index = state.teamPokemon.findIndex((pokemon) => pokemon?.pokedexId === action.payload);

      if (index !== undefined) {
        state.teamPokemon[index] = null;
      }
    }
  }
});

export const { addPokemon, removePokemon } = counterSlice.actions;

export default counterSlice.reducer;
