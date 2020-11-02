import React, { Component } from 'react'
import Header from '../header/header'
import './app.css'
import CommonContainer from '../СommonСontainer/CommonContainer'
import RandomPlanetsContainer from '../random-planet/RandomPlanetsContainer'


class App extends Component {

    render() {
        
        return (
            <div className='container app'>
                
                <Header />

                <RandomPlanetsContainer />
                
                <CommonContainer /> 
                
            </div>
        )
    }
}

export default App