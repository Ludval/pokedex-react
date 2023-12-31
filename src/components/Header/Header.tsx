import React from 'react';
import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, Toolbar } from '@mui/material';
import './Header.css';

export default function Header(props: { generation: number; handleClick: (newGen: number) => void }): JSX.Element {
  const menuItems = new Array(9).fill(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static' sx={{ backgroundColor: '#E3350D' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>POKEDEX</h1>

          <Box sx={{ minWidth: 90 }}>
            <FormControl fullWidth>
              <InputLabel id='select-generation'>Generation</InputLabel>
              <Select
                labelId='select-generation'
                value={props.generation}
                label='Generation'
                onChange={(event) => props.handleClick(event.target.value as number)}
              >
                {menuItems.map((_, index) => {
                  return (
                    <MenuItem value={index + 1} key={index + 1}>
                      {index + 1}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
