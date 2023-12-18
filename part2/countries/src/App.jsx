import { useState, useEffect } from 'react'
import axio from 'axios'
import ListCountries from './components/List'

function App() {
  const [countries, setCountries] = useState([])
  const [searchtext, setSearchText] = useState('')

  useEffect(() => {
    axio.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        console.log('promise result', response.data[0])
      })
  }, [])
  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchtext.toLowerCase()))

  
  return (
    <>
      <h1>Countries Data</h1>
      <div>
        <p>Find countries</p> <input value={searchtext} onChange={(e)=>{setSearchText(e.target.value)}}></input>
      </div>

      <ListCountries data={filteredCountries} setSearchText={setSearchText}></ListCountries>
    </>
  )
}

export default App
