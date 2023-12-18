import React from "react"
import './countryform.css'
import WeatherData from "./WeatherData"
const CountryForm = ({ data }) => {
  console.log('CountryForm componente', data)
  console.log('CountryForm componente', data)
  const objectArray = Object.entries(data.languages)
  return (
    <>
      <h1>{data.name.common}</h1>
      <p>Capital: {data.capital}</p>
      <p>Populaton: {data.population}</p>
      <h2>Languages</h2>
      <ul>
        {objectArray.map(([key, value]) =>
          <li key={key}> {value} </li>)
        }
      </ul>
      <img  src={data.flags.svg} alt={data.flags.alt} ></img>
      <WeatherData country={data.name.common}></WeatherData>
    </>
  )
}

export default CountryForm