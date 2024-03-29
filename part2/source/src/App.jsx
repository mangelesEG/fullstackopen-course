import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/Notes'
import axios from 'axios'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(false)
  
  useEffect(() => {
    console.log('effect')
   noteService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response)
      })
  }, [])
  console.log('render', notes.length, 'notes')


  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    
    noteService.create(noteObject)
    .then(response => {
        setNotes(notes.concat(response))
        setNewNote('')
    })
  }
  const toggleImportanceOf = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    console.log(`importance of ${id} needs to be toggled`)
  

    noteService.update(id,changedNote).then(response => {
      setNotes(notes.map(note => note.id !== id ? note : response))
    })
    .catch(error => {
      alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notes.filter(n => n.id !== id))
    })
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id} note={note} toggleImportance={()=>toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default App 
