import Stack from '@mui/material/Stack';
import React from 'react';

import './Team.css';

export default function Team(): JSX.Element {
  return (
    <section>
      <h1>Team</h1>

      <Stack direction='row' spacing={2}>
        <div className='box'></div>

        <div className='box'></div>

        <div className='box'></div>

        <div className='box'></div>

        <div className='box'></div>

        <div className='box'></div>

        <img className='img' src='/images/pokeball.png' />
      </Stack>
    </section>
  );
}
