import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InformationBox from "./InformationBox";
export default function WeatherApp(){
    
    const [weatherInfo, setWeatherInfo] = useState({
                    city: "CITY" ,
                  feelslike: 0,
                  temp: 0,
                  tempMin: 0,
                  tempMax: 0,
                  humidity: 0,
                  weather: "haze"
                });
                let updateInfo=(newinfo)=>{
                    setWeatherInfo (newinfo);
                } 
        return(
        <div style={{textAlign: "center"}}>
            <h2>Your Weather wise</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InformationBox info={weatherInfo}/>
        </div>

    );
}