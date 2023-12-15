import React from "react"
const PersonForm = ({eventHandler,name,number,eventChangeName, eventChangeNumber})=>{
    return(
        <form onSubmit={eventHandler}><div>
     
        <p>Name: <input value={name} onChange={eventChangeName} /></p>
        <p>Number: <input value={number} onChange={eventChangeNumber} /></p>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
)}

export default PersonForm