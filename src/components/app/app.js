import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'
import './app.css'
import CommonContainer from '../СommonСontainer/CommonContainer'


class App extends Component {

    render() {
        
        return (
            <div className='container-md '>
                
                <Header />

                <RandomPlanets />
                
                <CommonContainer /> 
                
            </div>
        )
    }
}

export default App