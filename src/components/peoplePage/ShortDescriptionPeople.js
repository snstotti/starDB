import React from 'react'


const RenderDetailsPeople = ({details}) =>{
    const { gender ,birthYear, eyeColor } = details
    return(
    <>   
    <li className="list-description list-group-item ">Gender: {gender}</li> 
    <li className="list-description list-group-item ">Birth year: {birthYear}</li> 
    <li className="list-description list-group-item ">Eye color: {eyeColor}</li> 
   </>
    )
}

export default RenderDetailsPeople
