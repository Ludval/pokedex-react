import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import PokemonService from "../services/Pokemon.service"

export const getPokemonDetails: any = createAsyncThunk('pokemon-detail', (id: number) => PokemonService.getById(id))
export const getPokemonList: any = createAsyncThunk('pokemon-list', () => PokemonService.getAll())

export const counterSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonDetails: {},
    pokemonList: [],
    isLoading: true,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(getPokemonDetails.pending, (state: any, action: any) => {
      state.isLoading = true
    }),
      builder.addCase(getPokemonDetails.fulfilled, (state: any, action: any) => {
        state.pokemonDetails = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(getPokemonList.pending, (state: any, action: any) => {
        state.isLoading = true
      }),
      builder.addCase(getPokemonList.fulfilled, (state: any, action: any) => {
        state.pokemonList = action.payload;
        state.isLoading = false;
      })
  }
})

export default counterSlice.reducer