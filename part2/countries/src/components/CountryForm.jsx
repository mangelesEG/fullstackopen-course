import React from "react"
import './countryform.css'
const CountryForm = ({ data }) => {
  console.log('CountryForm componente', data)
  console.log('CountryForm componente', data)
  const objectArray = Object.entries(data.languages)
  const elements = []
  objectArray.map(([key, value]) => {
    elements.push(<li key={key}> {value} </li>)
  })
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
      <img src={data.flags.svg} alt={data.flags.alt} ></img>
    </>
  )
}

export default CountryForm