import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from 'react-redux';

import './PokemonDetails.css';
import { getPokemonDetails } from '../../store/Pokemon.store';
import { CircularProgress } from '@mui/material';
import { AppDispatch } from '../../store/store';

export default function PokemonDetails(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const { pokemonDetails, isLoading } = useSelector((state: any) => state.pokemon);

  useEffect(() => {
    dispatch(getPokemonDetails(Number(id)));
  }, [dispatch]);

  const goBack = (): void => navigate('/');

  return (
    <section>
      <h1>DETAILS</h1>
      <ArrowBackIcon onClick={goBack} />

      {isLoading ? (
        <CircularProgress />
      ) : (
        <div className='card'>
          <div className='img-container'>
            <img src={pokemonDetails?.sprites?.regular} />
          </div>

          <div className='type'>
            {pokemonDetails?.types?.map((type: any) => {
              return (
                <div className='type-container' key={type.name}>
                  <img src={type.image} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
