import React, { Fragment } from 'react'
import '../../../PageContainer/PageContainer.css'
import Spinner from '../../../../spiner/spiner'


const RenderItem = ({ list, setStartId, idItem, way}) =>{
    
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
                <span className='renderItem__title'>{name}</span> {way!=='starships'?<span className='renderItem__label'>{temp}, {temp1}</span>:null}
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

export default RenderItem
