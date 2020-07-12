import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'
// import ItemList from '../item-list/item-list'
// import PersonDetails from '../person-details/person-details'
import './app.css'
import PeoplePage from '../peoplePage/peoplePage'



class App extends Component {

    state = {
        ItemSelected: 4
    }

    onItemSelected = (id) => {
        this.setState({
            ItemSelected: id
        })
    }

    render() {

        
        return (
            <div className='container-md'>
                <Header />
                <RandomPlanets />

                <PeoplePage
                    
                    onItemSelected={this.onItemSelected}
                    personId={this.state.ItemSelected} />

            </div>
        )
    }
}

export default App