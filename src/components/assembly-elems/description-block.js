import React from 'react'
import './description-block.css'

const DescriptionBlock = ({loader,
    propertyOne, propertyTwo, propertyThree,
    id,name,dataOne,dataTwo,dataThree
}) => {
    console.log(id)
    return (
        <div className='random-planet d-flex jumbotron mb-5'>
            <div>
                <img className='planets-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='' />
                {/* {loader} */}
            </div>


            <div className='description'>
                <h2>{name}</h2>
                <ul className="list-group list-group-flush description">
                    <li className="list-description list-group-item ">{propertyOne}<span>{dataOne}</span> </li>
                    <li className="list-group-item list-description">{propertyTwo}<span>{dataTwo}</span></li>
                    <li className="list-group-item list-description">{propertyThree}<span>{dataThree}</span></li>
                </ul>
            </div>

        </div>
    )
}

export default DescriptionBlock