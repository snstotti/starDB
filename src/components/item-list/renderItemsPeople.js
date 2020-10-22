import React, { Fragment } from 'react'
import '../СommonСontainer/PageContainer/PageContainer.css'
import Spinner from '../spiner/spiner'


const RenderItemPeopleList = ({ list, setStartId, idItem }) =>{
    
    const peopleList = list.map(elem => {
        
        let value= Object.values(elem)
        
        const [ id, name, temp, temp1 ] = value
        const classActive = 'list-group-item list-group-item-action list active'
        const classDefault = 'list-group-item list-group-item-action list'
        return (
            <li
                id={id}
                key={id}
                onClick={() => { setStartId(id) }}
                className={id !== idItem ? classDefault : classActive}>
                <span className='name'>{name}</span> <span className='label'>{temp}, {temp1}</span>
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
