import React from 'react'


const ShortDescriptionStarships = ({details}) =>{
    const { model,manufacturer,costInCredits,length,crew,passengers,cargo_capacity } = details
    return(
    <div className='d-flex flex-column'>   
    <li className="list-description list-group-item ">Model: {model}</li> 
    <li className="list-description list-group-item ">Manufacturer: {manufacturer}</li> 
    <li className="list-description list-group-item ">Cost in credits: {costInCredits}</li> 
    <li className="list-description list-group-item ">Length: {length}</li> 
    <li className="list-description list-group-item ">Crew: {crew}</li> 
    <li className="list-description list-group-item ">Passengers: {passengers}</li> 
    <li className="list-description list-group-item ">Cargo Capacity: {cargo_capacity}</li> 
   </div>
    )
}

export default ShortDescriptionStarships
