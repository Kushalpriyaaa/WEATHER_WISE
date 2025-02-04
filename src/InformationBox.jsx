
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InformationBox.css"
export default function InformationBox({ info }) {
    const INIT_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zP_2WGm8UrAy-vAl5Pb4cLWhEQKOX_NJAg&s";
  
    return (
      <div className="InfoBox">
        
        <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
        title="green iguana"
        />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary"component={"span"} >
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity= {info.humidity}</p>
            <p>Min Temp = {info.tempMin}</p>
            <p>Max Temp = {info.tempMax}</p>
            <p>The current temperature is <strong>{info.temp}°C</strong>, with a humidity level of <em>{info.humidity}%</em>.</p>

           
        </Typography>
      </CardContent>
      
    </Card>
      </div>
      </div>
    );
  } 