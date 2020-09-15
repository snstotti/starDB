import React from 'react'


const DescriptionInfoPeople = ({ peopleInfo, imageUrl }) => {

    const { name, gender, birthYear, eyeColor, hairColor } = peopleInfo

    return (
        <div className='personDetails d-flex jumbotron'>
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


}

export default DescriptionInfoPeople