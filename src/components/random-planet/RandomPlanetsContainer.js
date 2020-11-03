import React, { useEffect,useState } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import RandomPlanets from './random-planet.js'
import { requestRandomPlanet,getUrlimagePlanet} from '../redux/planetsPageReduce'




const RandomPlanetsContainer =({randomPlanets,requestRandomPlanet,randomUrlImage})=> {

    const [random,setRandom]=useState(2)
    
    let idR = Math.round(Math.random() * 16 + 3)
    let timerId = setInterval(()=>setRandom(idR),3000)

    
    
        useEffect(()=>{
            requestRandomPlanet(random)
        },[requestRandomPlanet,random])

        useEffect(()=>{
           return()=>{
            clearInterval(timerId)
           }
        },[timerId])

        return (
            <div>
                <RandomPlanets 
                    info={randomPlanets}
                    imageUrl={randomUrlImage}
                    />
            </div>
        )
    
}
const mapStateToProps = (state) => {

    return {
        randomPlanets: state.planetsPage.randomPlanets,
        randomUrlImage: state.planetsPage.randomUrlImage,
    }
}

export default compose(
    connect(mapStateToProps,
        {
            requestRandomPlanet,getUrlimagePlanet
         })
)(RandomPlanetsContainer)