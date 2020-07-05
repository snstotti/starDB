import React,{Component} from 'react'
import './random-planet.css'
import SwapiService from '../../service/SwapiService'

export default class RandomPlanets extends Component{

    swapiService = new SwapiService()

    state={
        planet:{}
    }

    constructor(){
        super()
        this.updatePlanet()
    }

    onPlanetLoaded=(planet)=>{
        this.setState({planet})
    }

    updatePlanet =()=>{
        const id = Math.floor(Math.random() * 18 + 2)
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
        
    }

render(){
    console.log(this.swapiService.getPlanet(7));
    
    const {planet:{id,name,rotationPeriod,population,diameter}} = this.state

    return (
        <div className='random-planet d-flex jumbotron mb-5'>

            <div>
            <img className='planets-img' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='' />
            </div>
            

            <div className='description'>
                <h2>{name}</h2>
                <ul className="list-group list-group-flush description">
                    <li className="list-description list-group-item ">Population: {population} </li>
                    <li className="list-group-item list-description">Rotation period: {rotationPeriod}</li>
                    <li className="list-group-item list-description">Diameter {diameter}</li>
                </ul>
            </div>

        </div>
    )
}
    
}

