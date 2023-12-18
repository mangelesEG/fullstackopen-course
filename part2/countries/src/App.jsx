import { useState, useEffect } from 'react'
import axio from 'axios'
import ListCountries from './components/List'

function App() {
  const [countries, setCountries] = useState([])
  const [countriesShow, setCountriesShow] = useState([])
  const [searchtext, setSearchText] = useState('')

  useEffect(() => {
    axio.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
        setCountriesShow(response.data)
        console.log('promise result', response.data[0])
      })
  }, [])

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value)
    if (event.target.value.length > 0) {
      if (countries.length > 0) {
        console.log('countries[0]', countries[0]);
        const onShow = countries.filter(p => p.name.common.toUpperCase().includes(event.target.value.toUpperCase()))
        setCountriesShow(onShow)
      }
    }
  }
  return (
    <>
      <h1>Countries Data</h1>
      <div>
        <p>Find countries</p> <input value={searchtext} onChange={handleSearchTextChange}></input>
      </div>

      <ListCountries data={countriesShow}></ListCountries>
    </>
  )
}

export default App
