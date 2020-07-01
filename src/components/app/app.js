import React, { Component } from 'react'
import Header from '../header/header'
import RandomPlanets from '../random-planet/random-planet'
import ObjectDescription from '../info-block/object-desc/objectDescription'
import ListObject from '../info-block/list-objects/listObject'
import './app.css'


class App extends Component{

    render(){

       
        return(
            <div className='container-md'>
               <Header />
               <RandomPlanets />
               <div className='info-block'>
                    <ListObject />
                    <ObjectDescription />
               </div>
            </div>
        )
    }
}

export default App