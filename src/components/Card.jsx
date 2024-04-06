import { Card, CardContent, CardMedia, Typography, Stack, Chip } from '@mui/material';

export default function ImgMediaCard({ name, status, species, gender, img }) {
  return (
    <Card sx={{ width: "100%"}}>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>

      <Stack direction="row" spacing={1}>
        <Chip label={status} />
        <Chip label={species} />
        <Chip label={gender} />
      </Stack>
    </Card>
  );
}