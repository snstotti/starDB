import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'
// import ItemList from '../item-list/item-list'
// import PersonDetails from '../person-details/person-details'
import './app.css'
import PeoplePage from '../peoplePage/peoplePage'
import SwapiService from '../../service/SwapiService'
import { Route, BrowserRouter } from "react-router-dom"
// import RenderDetails from '../person-details/RenderDetails/renderDetails'
import { Provider } from 'react-redux'
import store from '../redux/redux-store'
import { imageProfile, setImageUrl } from '../redux/peoplePageReduce'
import PeoplePageContainer from '../peoplePage/peoplePageContainer'


export default class App extends Component {

    swapiService = new SwapiService();
    
    render() {
        
        return (

            <BrowserRouter>
                <Provider store={store} >
                    <div className='container-md'>
                        <Header  />

                        <RandomPlanets />

                        <Route path='/people'>
                            <PeoplePageContainer
                                getData={this.swapiService.getAllPeople}
                                getDetails={this.swapiService.getPerson}
                                getUrl={this.swapiService.getImagePeople}
                            />
                        </Route>
                        <Route path='/planets'>
                            {/* <PeoplePage
                                getData={this.swapiService.getAllPlanets}
                                getDetails={this.swapiService.getPlanet}
                                getUrl={this.swapiService.getImagePlanet} /> */}
                        </Route>
                    </div>
                </Provider>
            </BrowserRouter>
        )
    }
}
