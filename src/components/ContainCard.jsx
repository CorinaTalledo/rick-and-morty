import Card from "./Card"
import Box from '@mui/material/Box';

export default function ContainCard({ characters }) {
  return (
    <Box sx={{width:"90%", margin:"auto", display:"grid", justifyContent:"space-around", gridTemplateColumns:"repeat(4, 1fr)", gap:"45px"}} >
      {
        characters.map(({id, name, status, species, gender, image}) => {
          return(
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              img={image}
            />)
        })
      }
    </Box>
  )
}


