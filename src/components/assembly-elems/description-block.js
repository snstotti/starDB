import React from 'react'
import './description-block.css'

const DescriptionBlock = () => {

    return (
        <div className='random-planet d-flex jumbotron mb-5'>
            <div>
                <img className='planets-img' src='https://starwars-visualguide.com/assets/img/planets/2.jpg' alt='' />
            </div>


            <div className='description'>
                <h2>Bespin</h2>
                <ul className="list-group list-group-flush description">
                    <li className="list-description list-group-item ">Cras justo odio</li>
                    <li className="list-group-item list-description">Dapibus ac facilisis in</li>
                    <li className="list-group-item list-description">Vestibulum at eros</li>
                </ul>
            </div>

        </div>
    )
}

export default DescriptionBlock