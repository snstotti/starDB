import React from 'react'
import './person-details.css'
import Spiner from '../spiner/spiner'
import ShortDescriptionPlanet from '../PlanetsPage/ShortDescriptionPlanet'
import ShortDescriptionPeople from '../peoplePage/ShortDescriptionPeople'
import ShortDescriptionStarships from '../../StarshipsPage/ShortDescriptionStarships/ShortDescriptionStarships'


const PersonDetails = ({placeholderImageUrl, imageUrl, info,way }) => {
    let image
    if (!imageUrl) {
        image = placeholderImageUrl
        return <Spiner />
    } else {image = imageUrl}

    const itemInfo = info.map((e) => {

        const {id, name} = e
        return (
            <div key={id} className='personDetails d-flex jumbotron'>
                <div>
                    <img className='planets-img'
                        src={image}
                        alt='' />
                </div>

                <div className='description'>
                    <h3>{name} </h3>
                    <ul className="list-group list-group-flush m-0">
                       
                       {way == 'planet' 
                       ? <ShortDescriptionPlanet details={e} /> 
                       : way == 'people' 
                       ? <ShortDescriptionPeople details={e} />
                       : null
                       } 

                        
                       
                    </ul>
                </div>
            </div>)
    })
    return (
        <>
            {itemInfo}
        </>
    )

}
export default PersonDetails
