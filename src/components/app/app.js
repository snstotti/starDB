import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'
// import ItemList from '../item-list/item-list'
// import PersonDetails from '../person-details/person-details'
import './app.css'
import PeoplePage from '../peoplePage/peoplePage'
import SwapiService from '../../service/SwapiService'
import { Route, BrowserRouter } from "react-router-dom"



export default class App extends Component {

    swapiService = new SwapiService();

    render() {
        
        return (
            <BrowserRouter>

                <div className='container-md'>
                    <Header />

                    <RandomPlanets />

                    <Route path='/people'>
                        <PeoplePage
                            getData={this.swapiService.getAllPeople}
                            getDetails={this.swapiService.getPerson}
                            getUrl={this.swapiService.getImagePeople} />
                    </Route>
                    <Route path='/planets'>
                        <PeoplePage 
                            getData={this.swapiService.getAllPlanets}
                            getDetails={this.swapiService.getPlanet}
                            getUrl={this.swapiService.getImagePlanet} />
                    </Route>
                    
                        
                    
                </div>
            </BrowserRouter>
        )
    }
}