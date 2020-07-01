import React, { Fragment, Component } from 'react'
import './random-planet.css'
import DescriptionBlock from '../assembly-elems/description-block'

export default class RandomPlanets extends Component{

    state = {
        name:null,
        population:null,
    }

    render(){
        return (
            <Fragment>
                <DescriptionBlock
                propertyOne='Population:'
                propertyTwo='Rotaion Period:'
                propertyThree='Diametr:' />
            </Fragment>
        )
    }
   
}

