import React from "react"
const ListPhones = ({ data, deletePerson }) => {
  return (
    <>
      {data.map(person =>
        <div key={person.name}> {person.name} : {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
        </div>)}
    </>
  )
}

export default ListPhones