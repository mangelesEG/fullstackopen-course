import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPhones from './components/List'
import axio from 'axios'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personsShow, setPersonsShow] = useState(persons);


useEffect(()=>{
  axio
    .get('http://localhost:3001/persons')
    .then(response =>{
    setPersons(response.data)
    setPersonsShow(response.data)
    console.log(response.data)
    })
  },[])


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleDatafilterChange = (event) => {
    if (event.target.value.length > 0)
      setPersonsShow(persons.filter(p => p.name.toUpperCase().includes(event.target.value.toUpperCase())))
    else
      setPersonsShow(persons)

  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.filter(p => p.name == newName).length > 0)
      alert(`${newName} is already added to phonebook`)
    else {
      const nameObject = {
        name: newName, number: newNumber
      }
      const concatPersons = persons.concat(nameObject)
      setPersons(concatPersons)
      setNewName('')
      setNewNumber('')
      setPersonsShow(concatPersons)
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>


      <Filter eventHandler={handleDatafilterChange}></Filter>
      <h3>Add Person</h3>
      <PersonForm eventChangeName={handleNameChange} eventChangeNumber={handleNumberChange}
        name={newName} number={newNumber} eventHandler={addNewPerson}></PersonForm>
     <h2>Numbers</h2>
     <ListPhones data={personsShow}></ListPhones>

    </div>
  )
}

export default App