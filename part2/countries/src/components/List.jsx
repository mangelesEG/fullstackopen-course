import React from "react"
import CountryForm from "./CountryForm"
const ListCountries = ({data, setSearchText})=>{
  console.log('ListCountries componente',data)
  console.log('ListCountries componente',data.length)
  
  const clickHandler  = (value)=>{
    console.log('CLICK',value)
    setSearchText(value)
  }
  
  if(data.length===1){
    return(
      <>
      <CountryForm data={data[0]} />
      </>
    )
  }
  else if(data.length>10){
    return(
      <>
      <p key="1">Too many matches, specify another filter</p>
      </>
    )
  }
  else
    return data.map(item =>{return (
       <div key={item.name.common}>
       {item.name.common}  <button onClick={(e)=>clickHandler(item.name.common)}> SHOW </button>

        </div>)
})}

export default ListCountries