import React  from 'react'
import './person-details.css'
import Spiner from '../spiner/spiner'
import ShortDescriptionPlanet from '../PlanetsPage/ShortDescriptionPlanet'
import ShortDescriptionPeople from '../peoplePage/ShortDescriptionPeople'
import ShortDescriptionStarships from '../StarshipsPage/ShortDescriptionStarships'



const PersonDetails = ({imageUrl, info,way }) => {
   
    

    const itemInfo = info.map((e) => {
        let image = null
    if (!imageUrl) {
        
        return <Spiner />
    } else {image = imageUrl}
        
        const {id, name} = e

        return (
            <div key={id} className='personDetails d-flex jumbotron'>
               
               <div className='block-image'>
                    <img className='planets-img'  src={image} alt='' />
                </div>
                

                <div className='description'>
                    <h3>{name} </h3>
                    <ul className="list-group list-group-flush m-0">
                       
                       {way === 'planet' 
                       ? <ShortDescriptionPlanet details={e} /> 
                       : way === 'people' 
                       ? <ShortDescriptionPeople details={e} />
                       : <ShortDescriptionStarships details={e} />
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
