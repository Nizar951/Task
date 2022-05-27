import React from "react";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const isi = ({size, url, nama, judul}) => {
    return(
    <Grid item xs={3}>
        <item>
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height={size}
                src={url}
                alt="gambar"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Artists - {nama}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Judul - {judul}
                </Typography>
            </CardContent>
            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            </Card>
        </item>
    </Grid>
    )
}

export default isi;