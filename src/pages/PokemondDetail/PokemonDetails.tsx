import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from 'react-redux';

import './PokemonDetails.css';
import { PokemonSlice, getPokemonDetails } from '../../store/Pokemon.store';
import { Card, CardContent, CircularProgress, Grid } from '@mui/material';
import { AppDispatch } from '../../store/store';
import { Resistance, Talent } from '../../interfaces/Pokemon.interface';

export default function PokemonDetails(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { pokemonDetails, isLoading } = useSelector((state: { pokemon: PokemonSlice }) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemonDetails(Number(id)));
  }, [dispatch]);

  const goBack = (): void => navigate('/');

  return (
    <section id='PokemonDetails'>
      <div className='back'>
        <ArrowBackIcon onClick={goBack} />

        <span>Back to list</span>
      </div>

      {isLoading ? (
        <div className='loader'>
          <CircularProgress style={{ width: 60, height: 60 }} />
        </div>
      ) : (
        <Card sx={{ backgroundColor: 'rgba(1, 1, 1, 0.05)' }}>
          <CardContent className='flex-row'>
            <div className='card'>
              <div className='title'>{pokemonDetails.name?.fr}</div>
              <img style={{ width: '200px', height: '200px' }} src={pokemonDetails?.sprites?.regular} />
              <div className='type'>
                {pokemonDetails?.types?.map((type) => {
                  return (
                    <div className='type-container' key={type.name}>
                      <img src={type.image} />
                    </div>
                  );
                })}
              </div>
            </div>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <div className='grid-container grid-title'>Stats</div>
                <div className='flex-row space-between grid-container'>
                  <div>
                    <strong>Hp</strong>:
                  </div>
                  <div>{pokemonDetails.stats?.hp}</div>
                </div>
                <div className='flex-row space-between grid-container'>
                  <div>
                    <strong>Atk</strong>:
                  </div>
                  <div>{pokemonDetails.stats?.atk}</div>
                </div>
                <div className='flex-row space-between grid-container'>
                  <div>
                    <strong>Def</strong>:
                  </div>
                  <div>{pokemonDetails.stats?.def}</div>
                </div>
                <div className='flex-row space-between grid-container'>
                  <div>
                    <strong>Atk Spe</strong>:
                  </div>
                  <div>{pokemonDetails.stats?.spe_atk}</div>
                </div>
                <div className='flex-row space-between grid-container'>
                  <div>
                    <strong>Def Spe</strong>:
                  </div>
                  <div>{pokemonDetails.stats?.spe_def}</div>
                </div>
                <div className='flex-row space-between grid-container'>
                  <div>
                    <strong>Vit</strong>:
                  </div>
                  <div>{pokemonDetails.stats?.vit}</div>
                </div>
              </Grid>
              <Grid item xs={6}>
                <div className='grid-container grid-title'>Faiblesse</div>
                {pokemonDetails.resistances?.map((res: Resistance, index: number) => {
                  return res.multiplier < 1 ? (
                    <div className='flex-row space-between grid-container' key={index}>
                      <div>
                        <strong>{res.name}</strong>:
                      </div>
                      <div>{res.multiplier}</div>
                    </div>
                  ) : (
                    ''
                  );
                })}
              </Grid>
              <Grid item xs={6}>
                <div className='grid-container grid-title'>Talents</div>
                {pokemonDetails.talents?.map((res: Talent, index: number) => {
                  return (
                    <div className='flex-row space-between grid-container' key={index}>
                      <strong>{res.name}</strong>
                    </div>
                  );
                })}
              </Grid>
              <Grid item xs={6}>
                <div className='grid-container grid-title'>Dimension</div>
                <div className='flex-row space-between grid-container'>
                  <div>
                    <strong>Height</strong>:
                  </div>
                  <div>{pokemonDetails.height}</div>
                </div>
                <div className='flex-row space-between grid-container'>
                  <div>
                    <strong>Weight</strong>:
                  </div>
                  <div>{pokemonDetails.weight}</div>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
