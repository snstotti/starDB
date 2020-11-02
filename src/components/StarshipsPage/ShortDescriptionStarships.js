import React from 'react'


const ShortDescriptionStarships = ({ details }) => {
    const { model, manufacturer, costInCredits, length, crew, passengers, cargo_capacity } = details
    return (
        <>
            <li className="personDetails-list__item list-group-item ">Model: {model}</li>
            <li className="personDetails-list__item list-group-item ">Manufacturer: {manufacturer}</li>
            <li className="personDetails-list__item list-group-item ">Cost in credits: {costInCredits}</li>
            <li className="personDetails-list__item list-group-item ">Length: {length}</li>
            <li className="personDetails-list__item list-group-item ">Crew: {crew}</li>
            <li className="personDetails-list__item list-group-item ">Passengers: {passengers}</li>
            <li className="personDetails-list__item list-group-item ">Cargo Capacity: {cargo_capacity}</li>
        </>
    )
}

export default ShortDescriptionStarships
