import React, { Fragment } from 'react'
import './description-block.css'

const DescriptionBlock = ({id, name, dataOne, dataTwo, dataThree, propertyOne, propertyTwo, propertyThree}) => {

    return (
        <div className='random-planet d-flex jumbotron mb-5'>
           <div>
                <img className='planets-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='' />

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

// // const PrevBlock = ({planet, propertyOne, propertyTwo, propertyThree}) => {

// //     const {id, name, dataOne, dataTwo, dataThree} = planet
// //     console.log(name)
// //     return (
// //         <Fragment>
// //             <div>
// //                 <img className='planets-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='' />

// //             </div>

// //             <div className='description'>
// //                 <h2>{name}</h2>
// //                 <ul className="list-group list-group-flush description">
// //                     <li className="list-description list-group-item ">{propertyOne}<span>{dataOne}</span> </li>
// //                     <li className="list-group-item list-description">{propertyTwo}<span>{dataTwo}</span></li>
// //                     <li className="list-group-item list-description">{propertyThree}<span>{dataThree}</span></li>
// //                 </ul>
// //             </div>
// //         </Fragment>
// //     )
// // }

export default DescriptionBlock
