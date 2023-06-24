import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from './Pokemon.store'

export default configureStore({
  reducer: {
    pokemon: pokemonReducer
  },
})