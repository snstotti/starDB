import React, { Component } from 'react'
import './peoplePage.css'
import ErrorIndicator from '../errorIndicator/errorIndicator'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'


export default class PeoplePage extends Component {

    state = {
        ItemSelected: 7,
        hasError: false
    }

    onItemSelected = (id) => {
        this.setState({
            ItemSelected: id
        })
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    render() {
        const {getData, getDetails, getUrl} = this.props
        
        if(this.state.hasError){
            return (
                <ErrorIndicator />
            )
        }

        
        return (
            <div className='blockPage'>
                <ItemList 
                    onItemSelected={this.onItemSelected}
                    getData={getData}
                    renderItem={({gender, birthYear})=> `${gender}, ${birthYear}`} />
                <PersonDetails 
                    personId={this.state.ItemSelected}
                    getDetails={getDetails}
                    getUrl={getUrl}
                     />
            </div>
        )
    }
}

