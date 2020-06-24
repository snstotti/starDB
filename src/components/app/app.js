import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'

class App extends Component{

    render(){

        return(
            <div className='container'>
               <Header />
               <RandomPlanets />
            </div>
        )
    }
}

export default App