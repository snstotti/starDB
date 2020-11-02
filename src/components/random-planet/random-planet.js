import React,{Fragment} from 'react'
import './random-planet.css'
import Spiner from '../spiner/spiner'



const RandomPlanets =({info,imageUrl})=>{
 
    if(!imageUrl || !info){
       return <Spiner />
    }
    return (
        <div className='random-planet d-flex jumbotron mb-5 rounded '>
           <PlanetView 
           info={info} imageUrl={imageUrl} 
           /> 
        </div>
    )
}
export default RandomPlanets



const PlanetView = ({info,imageUrl})=>{

    const {name,rotationPeriod,population,diameter} = info

    
    return(
        <Fragment>
             <div className='random-planet__image'>
                <img 
                    className='random-planet__picture' 
                    src={imageUrl}
                    alt='' />
            </div>
           

            <div className='random-planet__description'>
                <h2 className='random-planet__title'>{name}</h2>
                <ul className='random-planet__list list-group list-group-flush'>
                    <li className="random-planet__item list-group-item ">Population: {population} </li>
                    <li className="random-planet__item list-group-item ">Rotation period: {rotationPeriod}</li>
                    <li className="random-planet__item list-group-item ">Diameter {diameter}</li>
                </ul>
            </div>
        </Fragment>
    )
}