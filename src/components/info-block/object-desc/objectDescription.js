import React from 'react'
import './objectDescription.css'
import DescriptionBlock from '../../assembly-elems/description-block'

const ObjectDescription=()=>{
    return(
        <div>
            <DescriptionBlock
            propertyOne='Gender:'
            propertyTwo='Birth year:'
            propertyThree='Eye color:' />
        </div>
    )
}

export default ObjectDescription