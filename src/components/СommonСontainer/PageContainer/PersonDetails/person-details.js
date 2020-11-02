import React  from 'react'
import './person-details.css'
import Spiner from '../../../spiner/spiner'
import ShortDescriptionPlanet from '../../../PlanetsPage/ShortDescriptionPlanet'
import ShortDescriptionPeople from '../../../peoplePage/ShortDescriptionPeople'
import ShortDescriptionStarships from '../../../StarshipsPage/ShortDescriptionStarships'



const PersonDetails = ({imageUrl, info,way }) => {

    const itemInfo = info.map((e) => {
        
        const {name} = e
        
        return (
            <div key={name} className='personDetails d-flex jumbotron'>
               
               <div className='personDetails__img'>
                    <img className='personDetails__picture'  src={imageUrl} alt='' />
                </div>
                 

                <div className='personDetails__description'>
                    <div className='personDetails__title'><h3 className='personDetails-title__name'>{name} </h3></div>
                    <ul className="personDetails__list list-group list-group-flush m-0">
                       
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
    if(!imageUrl || !info){
        return <Spiner />
    }
    return (
        <>
            {itemInfo}
        </>
    )

}
export default PersonDetails
