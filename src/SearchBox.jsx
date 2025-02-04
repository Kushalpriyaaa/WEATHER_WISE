
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const API_URL = import.meta.env.REACT_APP_API_URL || 'http://api.openweathermap.org/data/2.5/weather';
    const API_KEY = import.meta.env.REACT_APP_API_KEY || '605a6c2967a37fd25ec4ea346fe139cd';
    
    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            if (!response.ok) {
                throw new Error('City not found');
            }
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            console.error("Error fetching weather:", err);
            setError(err.message);
            return null;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError("");
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        setLoading(true);
        setError("");
        const newinfo = await getWeatherInfo();
        if (newinfo) {
            updateInfo(newinfo);
            setCity("");
        }
        setLoading(false);
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City" 
                    label="City Name"
                    variant="outlined" 
                    required
                    value={city} 
                    onChange={handleChange}
                    error={!!error}
                    helperText={error}
                />
                <br></br>
                <br></br>
                <Button 
                    variant="contained" 
                    type="submit"
                    disabled={loading}
                > 
                    {loading ? "Searching..." : "Search"}
                </Button>
            </form>
        </div>
    );
}