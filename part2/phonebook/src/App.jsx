import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import ListPhones from './components/List'
import phonebookService from './services/Phonebook'
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [personsShow, setPersonsShow] = useState(persons);


  useEffect(() => {

    phonebookService.getAll()
      .then(response => {
        setPersons(response)
        setPersonsShow(response)
        console.log(response)
      })
  }, [])


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
      phonebookService.create(nameObject)
        .then(response => {
          const concatPersons = persons.concat(nameObject)
          setPersons(concatPersons)
          setNewName('')
          setNewNumber('')
          setPersonsShow(concatPersons)
        })

    }
  }
  const deletePerson = (id) => {
    const personToDelete = persons.filter(person => person.id === id)[0]
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      phonebookService
        .deletePerson(id)
        .then(response => {
          const listPersons = persons.filter(person => person.id !== id)
          setPersons(listPersons)
          //setMessage(`Information of ${personToDelete.name} removed from server successfully`)
          //setStyle('success')
          // setTimeout(() => {setMessage(null)}, 5000)
          setPersonsShow(listPersons)
        })
        .catch(err => {
          // setMessage(`Information of ${personToDelete.name} has already been removed from server`)
          //setStyle('error')
          //setTimeout(() => {setMessage(null)}, 5000)
          setPersons(persons.filter(p => p.name !== personToDelete.name))
        })
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
      <ListPhones data={personsShow} deletePerson={deletePerson}></ListPhones>

    </div>
  )
}

export default App