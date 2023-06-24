import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokemonService from "../../services/Pokemon.service";
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Team from "../../components/Team/Team";
import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonList } from "../../store/Pokemon.store";
import { Button } from "@mui/base";

export default function PokemonList(props: { generation: number }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [toto, setToto] = useState(1);
  const { pokemonList, isLoading } = useSelector((state: any) => state.pokemon)
  const columns: GridColDef[] = [
    { field: 'pokedexId', headerName: 'ID', width: 90 },
    {
      field: 'sprites',
      headerName: 'Image',
      width: 150,
      renderCell: (params: GridRenderCellParams<any>) => (
        <img src={params.value.regular} />
      ),
      sortable: false,
      disableColumnMenu: true
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      valueGetter: (params) => {
        return params.value.fr;
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 100,
      renderCell: (params: GridRenderCellParams<any>) => (
        <>
          <Stack direction="row" spacing={2}>
            <VisibilityIcon onClick={() => handleSubmit(params.value)} />
            <StarBorderIcon />
          </Stack>
        </>
      ),
      valueGetter: (params) => {
        return params.row.pokedexId
      },
      sortable: false,
      disableColumnMenu: true
    },
  ];


  useEffect(() => {
    console.log(props)
    dispatch(getPokemonList())

    console.log('HERE', props);
  }, [props.generation])

  function handleSubmit(pokedexId: string) {
    navigate(`/detail/${pokedexId}`);
  }

  // console.log(pokemonList)

  return (
    <section>
      <h1>POKEMON</h1>

      {/* <Button onClick={() => setToto(toto + 1)}>HELLO</Button> */}

      <div style={{ height: 400, width: 550 }}>
        <DataGrid
          rows={pokemonList}
          getRowId={(row) => row.pokedexId}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>

      <Team />
    </section>
  );
}