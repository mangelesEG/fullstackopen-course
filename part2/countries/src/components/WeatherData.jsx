import React ,{ useState, useEffect } from 'react'
import axio from 'axios'

const WeatherData = ({country})=>{
    const [ weather, setWeather ] = useState({})
    const api_key = process.env.REACT_APP_WEATHER_API_KEY
    console.log('api-key',api_key);
        const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country}`
        console.log('URL:',url)
    useEffect(() => {
      axio
        .get(url)
        .then(res =>{console.log('RESPONSE',res.data); setWeather(res.data)}) 
    }, [country])
    return (
        <>
        <h2>Weather in {country}</h2>
        <div><strong>Temperature:</strong> {weather.current?.temperature}</div>
        <img src={weather.current?.weather_icons[0]}></img>
        <div><strong>Wind:</strong> {weather.current?.wind_speed} mph direction {weather.current?.wind_dir}</div>
        </>
    )
    
}

export default WeatherData