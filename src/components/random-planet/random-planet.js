import React from 'react'
import './random-planet.css'

const RandomPlanets = () => {

    return (
        <div className='random-planet d-flex jumbotron'>
            <img className='planets-img' src='https://starwars-visualguide.com/assets/img/planets/2.jpg' alt='' />

            <div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
            </div>

        </div>
    )
}

export default RandomPlanets