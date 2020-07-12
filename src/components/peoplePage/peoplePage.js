import React, { Component, Fragment } from 'react'
import './peoplePage.css'

import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'

export default class PeoplePage extends Component{



    render(){
        const {onItemSelected, personId} = this.props
        return(
            <div className='blockPage'>
                <ItemList onItemSelected={onItemSelected}/> 
                <PersonDetails personId={personId}/>
            </div>
        )
    }
}

