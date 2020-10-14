import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'
// import ItemList from '../item-list/item-list'
// import PersonDetails from '../person-details/person-details'
import './app.css'
import { setStartId} from '../redux/generalReduce'
import { Route } from "react-router-dom"
import PeoplePageContainer from '../peoplePage/peoplePageContainer'
import PlanetsPageContainer from '../PlanetsPage/PlanetsPageContainer'
import { compose } from 'redux'
import { connect } from 'react-redux'


class App extends Component {

    onItemSelected = (id) => {
        this.props.setStartId(id)
    }

    render() {

        return (
            <div className='container-md'>
                <Header />

                <RandomPlanets />

                <Route path='/people'>
                    <PeoplePageContainer onItemSelected={this.onItemSelected} name='people' image='characters' />
                </Route>
                <Route path='/planets'>
                <PeoplePageContainer onItemSelected={this.onItemSelected} name='planets' image='planets' />
                    {/* <PlanetsPageContainer onItemSelected={this.onItemSelected} /> */}
                </Route>
            </div>
        )
    }
}
const mapStateToProps = (state) => {

    return {
        
    }
}

export default compose(
    connect(mapStateToProps, { setStartId })
)(App)
