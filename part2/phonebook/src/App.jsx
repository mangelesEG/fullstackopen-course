import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
const [personsShow,setPersonsShow]= useState(persons);
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleDatafilterChange =(event) =>{
    if(event.target.value.length> 0) 
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

      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewPerson}>
      <div>          
          <p>Filter shown with <input onChange={handleDatafilterChange} /></p>
        </div>
        <div>
          <h3>Add Person</h3>
          <p>Name: <input value={newName} onChange={handleNameChange} /></p>
          <p>Number: <input value={newNumber} onChange={handleNumberChange} /></p>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>

      {personsShow.map(person =>
        <p key={person.name}>{person.name} : {person.number}</p>
      )}

    </div>
  )
}

export default App