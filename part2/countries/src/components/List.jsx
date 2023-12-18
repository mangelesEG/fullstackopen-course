import React from "react"
import CountryForm from "./CountryForm"
const ListCountries = ({data})=>{
  console.log('ListCountries componente',data)
  console.log('ListCountries componente',data.length)
  if(data.length==1){
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
    return(
       <> 
        {data.map(item =>
          <p key={item.name.common}>{item.name.common}</p>
        )}
        </>
)}

export default ListCountries