import React, { Fragment, Component } from 'react'
import './random-planet.css'
// import DescriptionBlock from '../assembly-elems/description-block'
import SwapiService from '../../service/SwapiService'
// import Spiner from '../spiner/spiner'

export default class RandomPlanets extends Component{

    swapiService = new SwapiService()

    state = {
        planet: {},
        isLoader: true
    }

    constructor(){
        super();
        this.updatePlanets()
    }

    onPlanetLoaded=(planet)=>{
        this.setState({
            planet,
            isLoader: false})
    }

    updatePlanets(){
        const id = Math.floor(Math.random() * 18 + 2)
        this.swapiService.getPlanet(id)
        .then(this.onPlanetLoaded)
    }
    

    render(){
        const {planet: {id, name, rotaionPeriod, population, diameter, isLoader}} = this.state
        console.log(this.state.planet)
        return (
            <Fragment>
                {/* <DescriptionBlock
                // planet={planet}
                spiner =  {<Spiner />}
                // isLoader ={isLoader}
                // id={id}
                // name={name}
                // dataOne={population}
                // dataTwo={rotaionPeriod}
                // dataThree={diameter}
                propertyOne='Population: '
                propertyTwo='Rotaion Period: '
                propertyThree='Diametr: ' 
                /> */}
            </Fragment>
        )
    }
   
}

