import React from 'react'
import './person-details.css'
import Spiner from '../spiner/spiner'


const PersonDetails = ({ imageUrl, itemInfo }) => {

    if (!imageUrl) {
        return <Spiner />
    }
    const people =  itemInfo.map(e=>{
        const { name, gender, birthYear, eyeColor, hairColor } = e
        console.log(Object.keys(e));
        return (
            <div key={name} className='personDetails d-flex jumbotron'>
                <div>
                    <img className='planets-img'
                        src={imageUrl}
                        alt='' />
                </div>
    
                <div className='description'>
                    <h3>{name} </h3>
                    <ul className="list-group list-group-flush description">
                        <li className="list-description list-group-item ">Gender: {gender} </li>
                        <li className="list-group-item list-description">Birth year: {birthYear} </li>
                        <li className="list-group-item list-description">Eye color: {eyeColor} </li>
                        <li className="list-group-item list-description">Hair color: {hairColor} </li>
                    </ul>
                </div>
            </div>)
    })
    return (
        <>
            {people}
        </>
        )

}
export default PersonDetails
