import React from 'react'
import './description-block.css'

const DescriptionBlock = ({
    propertyOne, propertyTwo, propertyThree
}) => {

    return (
        <div className='random-planet d-flex jumbotron mb-5'>
            <div>
                <img className='planets-img' src='https://starwars-visualguide.com/assets/img/planets/2.jpg' alt='' />
            </div>


            <div className='description'>
                <h2>Bespin</h2>
                <ul className="list-group list-group-flush description">
                    <li className="list-description list-group-item ">{propertyOne} <span>12</span> </li>
                    <li className="list-group-item list-description">{propertyTwo} <span>124</span></li>
                    <li className="list-group-item list-description">{propertyThree} <span>2000</span></li>
                </ul>
            </div>

        </div>
    )
}

export default DescriptionBlock