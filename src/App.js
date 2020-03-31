import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { Container, Paper } from '@material-ui/core';
import "./App.css"

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);
  
  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.REACT_APP_OPEN_WHEATHER_KEY,
        lang: 'pt',
        units: 'metric'
      }  
    });
    setWeather(res.data);        
  }
  
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition((position)=> {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])  

if(!location){
  return (
    <Fragment>
      Você precisa habilitar a localização no browser o/
    </Fragment>
  )
}else if (weather === false) {
  return (
    <Fragment>
      Buscando clima ...
    </Fragment>
  )
}else {
  return (    
    <Container maxWidth="sm" className="container">
    <Fragment>
      <Paper className="root" elevation={3}>
        <div className="textt">

      <h3>Clima nas suas Coordenadas (
        {weather['weather'][0]['description']}
          {weather.weather[0].main === "Clouds" ? "☁️" : "⛅"}
        )
      </h3>
      <hr />
      <ul>
        <li>Temperatura atual: {weather['main']['temp']}</li>
        <li>Temperatura máxima: {weather.main.temp_max} </li>
        <li>Temperatura minima: {weather.main.temp_min} </li>
        <li>Pressão: {weather.main.pressure} </li>
        <li>Umidade: {weather.main.humidity}</li>
      </ul>
        </div>
      </Paper>
    </Fragment>
    </Container>

  );
}

}

export default App;
