import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Team from '../../components/Team/Team';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonSlice, getPokemonList } from '../../store/Pokemon.store';
import { AppDispatch } from '../../store/store';
import { addPokemon, removePokemon } from '../../store/Team.store';
import { Pokemon, Sprite } from '../../interfaces/Pokemon.interface';
import StarIcon from '@mui/icons-material/Star';
import './PokemonList.css';

export default function PokemonList(props: { generation: number }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { pokemonList, isLoading } = useSelector((state: { pokemon: PokemonSlice }) => state.pokemon);
  const { teamPokemon } = useSelector((state: { team: { teamPokemon: Array<Pokemon | null> } }) => state.team);
  const columns: GridColDef[] = [
    { field: 'pokedexId', headerName: 'ID', width: 90 },
    {
      field: 'sprites',
      headerName: 'Image',
      flex: 1,
      renderCell: (params: GridRenderCellParams<Sprite>) => (
        <div className='sprites'>
          <img src={params.value.regular} />
        </div>
      ),
      sortable: false,
      disableColumnMenu: true,
      align: 'center',
      headerAlign: 'center'
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      valueGetter: (params) => {
        return params.value.fr;
      }
    },
    {
      field: 'action',
      headerName: '',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams<Pokemon>) => (
        <>
          <Stack direction='row' spacing={2}>
            <VisibilityIcon className='pointer' onClick={() => handleSubmit(params.value.pokedexId)} />
            {!isInTeam(params.value.pokedexId) ? (
              <StarBorderIcon
                className='pointer'
                color={isDisabled() ? 'disabled' : 'inherit'}
                onClick={() => addPokemonInTeam(params.value)}
              />
            ) : (
              <StarIcon className='pointer' style={{ color: '#e6bc2f' }} onClick={() => removePokemonFromTeam(params.value.pokedexId)} />
            )}
          </Stack>
        </>
      ),
      valueGetter: (params) => {
        return params.row;
      },
      sortable: false,
      disableColumnMenu: true
    }
  ];

  useEffect(() => {
    dispatch(getPokemonList(props.generation));
  }, [props.generation]);

  const handleSubmit = (pokedexId: string): void => {
    navigate(`/detail/${pokedexId}`);
  };

  const addPokemonInTeam = (pokemon: Pokemon): void => {
    if (!isDisabled()) {
      dispatch(addPokemon(pokemon));
    }
  };

  const removePokemonFromTeam = (pokedexId: number): void => {
    dispatch(removePokemon(pokedexId));
  };

  const isInTeam = (pokedexId: number): boolean => {
    return !!teamPokemon.find((pokemon) => pokemon?.pokedexId === pokedexId);
  };

  const isDisabled = (): boolean => {
    return teamPokemon.filter((pokemon) => pokemon).length === 6;
  };

  return (
    <section id='pokemonList'>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={pokemonList}
          getRowId={(row) => row.pokedexId}
          columns={columns}
          disableRowSelectionOnClick
          loading={isLoading}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 }
            }
          }}
        />
      </div>

      <Team />
    </section>
  );
}
