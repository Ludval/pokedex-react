import './App.css';
import { Routes, Route } from 'react-router-dom';

import PokemonList from './pages/PokemonList/PokemonList';
import PokemonDetails from './pages/PokemondDetail/PokemonDetails';
import { Button } from '@mui/base';
import { useState } from 'react';

function App() {
  const [test, setTest] = useState(1);

  const handle = (newGen?: number) => {
    // setTest(newGen)
    setTest(test + 1)
  }

  return (
    <div className="App">
      {/* <Header test={test} onClick="handle" /> */}

      <Button onClick={() => handle()}>HELLO</Button>

      <header className="App-header">
        <Routes>
          <Route path="/" element={<PokemonList generation={test} />} />
          <Route path="detail/:id" element={<PokemonDetails />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
