import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'
import ItemList from '../item-list/item-list'
import PersonDetails from '../person-details/person-details'
import './app.css'
class App extends Component{

    render(){

       
        return(
            <div className='container-md'>
               <Header />
               <RandomPlanets />
               <div className='block' >
                    <ItemList /> 
                    <PersonDetails />
               </div>
               
            </div>
        )
    }
}

export default App