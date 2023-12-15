import React from "react"
const ListPhones = ({data})=>{
    return(
       <> 

        {data.map(person =>
          <p key={person.name}>{person.name} : {person.number}</p>
        )}
        </>
)}

export default ListPhones