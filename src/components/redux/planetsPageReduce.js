import { imageAPI, itemsListAPI, personalAPI } from "../API/Api"
import { extractId } from "../helpers/getIdFromImage"

const SET_PLANET_INFO = 'SET_PLANET_INFO'
const SET_IMAGE_URL = 'SET_IMAGE_URL'
const SET_LIST_PLANET = 'SET_LIST_PLANET'
const SET_ID_ITEM = 'SET_ID_ITEM'
const SET_NEW_PAGE = 'SET_NEW_PAGE'

let initialState = {
    imageUrlPlanet: null,
    listPlanets: [],
    idItem: null,
    planetInfo: [],
    pagePlanets: 1
}

const peoplePageReduce =(state = initialState, action)=>{

    switch (action.type) {

        case SET_IMAGE_URL :{
            return { ...state, imageUrlPlanet: action.imageUrlPlanet}
        }
        case SET_LIST_PLANET :{
           
            return { ...state, listPlanets: action.listPlanets}
        }
        case SET_PLANET_INFO :{
           
            return { ...state, planetInfo: [action.planetInfo]}
        }
        case SET_ID_ITEM :{
           
            return { ...state, idItem: action.idItem}
        }
        case SET_NEW_PAGE :{
           
            return { ...state, pagePlanets: action.pagePlanets}
        }

        default: return state
    }
    
    
}

export const setImageUrl = imageUrlPlanet => ({type: SET_IMAGE_URL, imageUrlPlanet}) //+
export const setListPlanets = listPlanets => ({type: SET_LIST_PLANET, listPlanets}) //+
export const setPlanetInfo = planetInfo => ({type: SET_PLANET_INFO, planetInfo}) 
export const setItemId = idItem => ({type: SET_ID_ITEM, idItem})
export const setNewPagePlanets = pagePlanets => ({type: SET_NEW_PAGE, pagePlanets})



export const planetInfo = (id) => async (dispatch) => {
    const planets = await personalAPI.getPlanet(id)
    dispatch(setPlanetInfo(editStatePlanet(planets)))
}

export const togglePagePlanet = (toggle='p', page) => async (dispatch) => {  
    
    const newPage = toggle == 'm' ? page - 1 : page + 1
   
   await dispatch(setNewPagePlanets(newPage))

   
}
// export const togglePrevPagePlanet = (page) => async (dispatch) => {   
//     const prevPage = page - 1
//     await dispatch(setNewPage(prevPage))
// }


export const setStartId = (id) => async (dispatch) => {   
    await dispatch(setItemId(id))
} //+


export const requestPlanetInfo = (id) => async (dispatch) => {
    
    const planet = await personalAPI.getPlanetInfo(id)
    dispatch(setPlanetInfo(editStatePlanet(planet)))
    
}  //+


export const getUrlimagePlanet = (id) => async (dispatch) => {
    const defaultImage = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    const url = await imageAPI.getUrlImagePlanets(id)
    !url ? dispatch(setImageUrl(defaultImage)) : dispatch(setImageUrl(url))
    
    
} //+

export const requestListPlanets = (page) => async (dispatch) => {
    const planet = await itemsListAPI.getListPlanets(page)
    const newList = planet.map(editStatePlanet)
    dispatch(setListPlanets(newList))
    const id = await newList[0].id
    dispatch(setItemId(id))
   
} //+

 

const editStatePlanet = (planet) => {
    return {
        id: extractId(planet.url),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
        rotationPeriod: planet.rotation_period
    }
} // -----

// const editStateStarships = (starships) => {
//     return {
//         id: extractId(starships.url),
//         name: starship.name,
//         model: starship.model,
//         manufacturer: starship.manufacturer,
//         costInCredits: starship.costInCredits,
//         length: starship.length,
//         crew: starship.crew,
//         passengers: starship.passengers,
//         cargoCapacity: starship.cargoCapacity
//     }
// } //-----

export default peoplePageReduce