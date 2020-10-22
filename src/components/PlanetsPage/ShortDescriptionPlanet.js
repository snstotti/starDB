import React from 'react'


const ShortDescriptionPlanet = ({details}) =>{
    const { diameter, population, rotationPeriod } = details
    return(
    <>   
    <li className="list-description list-group-item ">Diametr: {diameter}</li> 
    <li className="list-description list-group-item ">Population: {population}</li> 
    <li className="list-description list-group-item ">Rotation Period: {rotationPeriod}</li> 
   </>
    )
}

export default ShortDescriptionPlanet
