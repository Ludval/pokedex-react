import Stack from '@mui/material/Stack';

import './Team.css';
import { useSelector } from 'react-redux';
import { Pokemon } from '../../interfaces/Pokemon.interface';

export default function Team(): JSX.Element {
  const { teamPokemon } = useSelector((state: { team: { teamPokemon: Array<Pokemon | null> } }) => state.team);

  return (
    <section>
      <h1 className='team-title'>Team</h1>

      <Stack direction='row' spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        {teamPokemon.map((pokemon, index) => {
          return (
            <div className='box' key={index}>
              {pokemon ? <img src={pokemon?.sprites?.regular} /> : ''}
            </div>
          );
        })}

        <img className='img' src='/images/pokeball.png' />
      </Stack>
    </section>
  );
}
