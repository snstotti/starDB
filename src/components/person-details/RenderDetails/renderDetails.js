import React from 'react'
import './renderDetails.css'

const RenderDetails = ({item, filed}) =>{

    return(
       
    <li className="list-description list-group-item ">{`${item}: ${filed}`}</li>
   
    )
}

export default RenderDetails
