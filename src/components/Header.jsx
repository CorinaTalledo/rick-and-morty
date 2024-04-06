import NavBar from "./NavBar"
import {Typography, Stack, Button} from '@mui/material';
import axios from "axios";


export default function Header({ setCharacters }) {

  function getCharacterByStatus(status){
    axios(`https://rickandmortyapi.com/api/character/?status=${status ? status : ""}`)
    .then(({data}) => { 
      setCharacters(data.results)
    })
  }


  return (
    <div>
      <Typography variant="h1" gutterBottom>
        Rick & Morty
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => getCharacterByStatus("Alive")}>
          Vivo
        </Button>
        <Button variant="outlined" onClick={() => getCharacterByStatus("Dead")}>
          Muerto
        </Button>
        <Button variant="outlined" onClick={() => getCharacterByStatus("unknown")}>
          No se sabe 
        </Button>
      </Stack>
    </div>
  )
}
