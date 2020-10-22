import React,{Component, Fragment} from 'react'
import './random-planet.css'

import Spiner from '../spiner/spiner'


export default class RandomPlanets extends Component{

    

    state={
        planet:{},
        isLoading:true,
        error: false
    }

   

    componentDidMount(){
        // this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    onPlanetLoaded=(planet)=>{
        this.setState({planet, isLoading: false})
    }

    onError=()=>{
        this.setState({
            error: true,
            isLoading: false
        })
    }

    // updatePlanet =()=>{
    //     const id = Math.floor(Math.random() * 18 + 2)
    //     this.swapiService
    //         .getPlanet(id)
    //         .then(this.onPlanetLoaded)
    //         .catch(this.onError)
    // }



render(){
    
    const {planet,isLoading, error} = this.state

    const hasData = !(isLoading || error)
    const spiner = isLoading ? <Spiner /> : null
    const content = hasData ? <PlanetView planet={planet} /> : null
    // const errorMessage = error ? <ErrorIndicator /> : null

    return (
        <div className='random-planet d-flex jumbotron mb-5 rounded'>
            {spiner}
            {/* {errorMessage} */}
            {content}
        </div>
    )
}
    
}

const PlanetView = ({planet})=>{

    const {id,name,rotationPeriod,population,diameter} = planet

    return(
        <Fragment>
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
        </Fragment>
    )
}