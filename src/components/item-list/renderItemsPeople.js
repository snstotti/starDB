import React, { Fragment } from 'react'
import './item-list.css'
import Spinner from '../spiner/spiner'


const RenderItemPeopleList = ({ list, setStartId, idItem }) =>{

    const peopleList = list.map(elem => {
        const { name, birthYear, gender, id } = elem
        const classActive = 'list-group-item list-group-item-action list active'
        const classDefault = 'list-group-item list-group-item-action list'
        return (
            <li
                id={id}
                key={id}
                onClick={() => { setStartId(id) }}
                className={id !== idItem ? classDefault : classActive}>
                <span>{name}</span> <span className='label'>{birthYear}, {gender}</span>
            </li>
        )
    })

    if (!list) {
        return <Spinner />;
    } 

    return (
    <Fragment>
        {peopleList}
    </Fragment>
    )
       
}

export default RenderItemPeopleList
