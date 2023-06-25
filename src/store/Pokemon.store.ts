import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PokemonService from '../services/Pokemon.service';
import { Pokemon } from '../interfaces/Pokemon.interface';

export const getPokemonDetails = createAsyncThunk('pokemon-detail', async (id: number) => PokemonService.getById(id));
export const getPokemonList = createAsyncThunk('pokemon-list', async (generation: number) => PokemonService.getAll(generation));

export interface PokemonSlice {
  pokemonDetails: Pokemon;
  pokemonList: Pokemon[];
  isLoading: boolean;
}

const initialState: PokemonSlice = {
  pokemonDetails: {} as Pokemon,
  pokemonList: [],
  isLoading: true
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonDetails.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonDetails.fulfilled, (state, action) => {
      state.pokemonDetails = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getPokemonList.pending, (state, _) => {
      state.isLoading = true;
    });
    builder.addCase(getPokemonList.fulfilled, (state, action) => {
      state.pokemonList = action.payload;
      state.isLoading = false;
    });
  }
});

export default pokemonSlice.reducer;
