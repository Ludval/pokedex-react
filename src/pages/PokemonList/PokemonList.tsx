import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Team from '../../components/Team/Team';
import { Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonList } from '../../store/Pokemon.store';
import { AppDispatch } from '../../store/store';

export default function PokemonList(props: { generation: number }): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { pokemonList, isLoading } = useSelector((state: any) => state.pokemon);
  const columns: GridColDef[] = [
    { field: 'pokedexId', headerName: 'ID', width: 90 },
    {
      field: 'sprites',
      headerName: 'Image',
      width: 150,
      renderCell: (params: GridRenderCellParams<any>) => <img src={params.value.regular} />,
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      valueGetter: (params) => {
        return params.value.fr;
      }
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params: GridRenderCellParams<any>) => (
        <>
          <Stack direction='row' spacing={2}>
            <VisibilityIcon onClick={() => handleSubmit(params.value)} />
            <StarBorderIcon />
          </Stack>
        </>
      ),
      valueGetter: (params) => {
        return params.row.pokedexId;
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

  return (
    <section>
      <h1>POKEMON</h1>

      <div style={{ height: 400, width: 550 }}>
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
          pageSizeOptions={[5, 10]}
        />
      </div>

      <Team />
    </section>
  );
}
