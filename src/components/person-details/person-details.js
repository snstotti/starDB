import React from 'react'
import './person-details.css'

const PersonDetails = () => {

    return (
        <div className='personDetails d-flex jumbotron'>
            <div>
            <img className='planets-img' src='https://starwars-visualguide.com/assets/img/planets/2.jpg' alt='' />
            </div>
            

            <div className='description'>
                <h3>Bespin</h3>
                <ul className="list-group list-group-flush description">
                    <li className="list-description list-group-item ">Cras justo odio</li>
                    <li className="list-group-item list-description">Dapibus ac facilisis in</li>
                    <li className="list-group-item list-description">Vestibulum at eros</li>
                </ul>
            </div>

        </div>
    )
}

export default PersonDetails