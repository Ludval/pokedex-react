import './App.css';
import { Routes, Route } from 'react-router-dom';

import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetails from './pages/PokemondDetail/PokemonDetails';
import React, { useState } from 'react';
import Header from './components/Header/Header';

function App(): JSX.Element {
  const [generation, setGeneration] = useState(1);

  const handleClick = (newGen: number): void => {
    setGeneration(newGen);
  };

  return (
    <div>
      <header role='heading'>
        <Header generation={generation} handleClick={handleClick} />
      </header>

      <main className='app-main'>
        <Routes>
          <Route path='/' element={<PokemonList generation={generation} />} />
          <Route path='detail/:id' element={<PokemonDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
