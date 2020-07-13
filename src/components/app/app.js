import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'
// import ItemList from '../item-list/item-list'
// import PersonDetails from '../person-details/person-details'
import './app.css'
import PeoplePage from '../peoplePage/peoplePage'
import SwapiService from '../../service/SwapiService'



export default class App extends Component {

    swapiService = new SwapiService();

    render() {

        
        return (
            <div className='container-md'>
                <Header />

                <RandomPlanets />

                <PeoplePage getData={this.swapiService.getAllPeople} />
            </div>
        )
    }
}