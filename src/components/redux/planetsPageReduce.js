import { imageAPI, itemsListAPI, personalAPI } from "../API/Api"
import { extractId } from "../helpers/getIdFromImage"

const SET_PLANET_INFO = 'SET_PLANET_INFO'
const SET_IMAGE_URL_PLANETS = 'SET_IMAGE_URL_PLANETS'
const SET_LIST_PLANET = 'SET_LIST_PLANET'
const SET_ID_ITEM_PLANETS = 'SET_ID_ITEM_PLANETS'
const SET_NEW_PAGE_PLANETS = 'SET_NEW_PAGE_PLANETS'
const SET_RANDOM_PLANETS = 'SET_RANDOM_PLANETS'
const SET_RANDOM_URL_IMAGE = 'SET_RANDOM_URL_IMAGE'

let initialState = {
    imageUrlPlanet: '',
    listPlanets: [],
    idItemPlanets: 1,
    planetInfo: [],
    pagePlanets: 1,
    randomPlanets: [],
    randomUrlImage: null,
    isLoading: false
}

const peoplePageReduce =(state = initialState, action)=>{

    switch (action.type) {

        case SET_IMAGE_URL_PLANETS :{
            return { ...state, imageUrlPlanet: action.imageUrlPlanet}
        }
        case SET_LIST_PLANET :{
           
            return { ...state, listPlanets: action.listPlanets}
        }
        case SET_PLANET_INFO :{
           
            return { ...state, planetInfo: [action.planetInfo]}
        }
        case SET_ID_ITEM_PLANETS :{
           
            return { ...state, idItemPlanets: action.idItemPlanets}
        }
        case SET_NEW_PAGE_PLANETS :{
           
            return { ...state, pagePlanets: action.pagePlanets}
        }
        case SET_RANDOM_PLANETS :{
           
            return { ...state, randomPlanets: action.randomPlanets}
        }
        case SET_RANDOM_URL_IMAGE :{
           
            return { ...state, randomUrlImage: action.randomUrlImage}
        }

        default: return state
    }
    
    
}

export const setImageUrl = imageUrlPlanet => ({type: SET_IMAGE_URL_PLANETS, imageUrlPlanet}) //+
export const setListPlanets = listPlanets => ({type: SET_LIST_PLANET, listPlanets}) //+
export const setPlanetInfo = planetInfo => ({type: SET_PLANET_INFO, planetInfo}) 
export const setItemId = idItemPlanets => ({type: SET_ID_ITEM_PLANETS, idItemPlanets})
export const setNewPagePlanets = pagePlanets => ({type: SET_NEW_PAGE_PLANETS, pagePlanets})
export const setRandomPlanets = randomPlanets => ({type: SET_RANDOM_PLANETS, randomPlanets})
export const setRandomImage = randomUrlImage => ({type: SET_RANDOM_URL_IMAGE, randomUrlImage})


export const setStartIdPlanets = (id) => async (dispatch) => {   
    await dispatch(setItemId(id))
}

export const planetInfo = (id) => async (dispatch) => {
    const planets = await personalAPI.getPlanet(id)
    dispatch(setPlanetInfo(editStatePlanet(planets)))
}

export const togglePagePlanet = (toggle='p', page) => async (dispatch) => {  
    
    const newPage = toggle === 'm' ? page - 1 : page + 1
   
   await dispatch(setNewPagePlanets(newPage))
}

export const setStartId = (id) => async (dispatch) => {   
    await dispatch(setItemId(id))
} 


export const requestPlanetInfo = (id) => async (dispatch) => {
    const planet = await personalAPI.getPlanetInfo(id)
    dispatch(setPlanetInfo(editStatePlanet(planet)))
} 


export const requestRandomPlanet = (id) => async (dispatch) => {
    try{
        const planet = await personalAPI.getPlanetInfo(id)
    dispatch(setRandomPlanets(editStatePlanet(planet)))
    const defaultImage = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    const url = await imageAPI.getUrlImagePlanets(id)
    !url ? dispatch(setRandomImage(defaultImage)) : dispatch(setRandomImage(url))
    } catch(e){
        console.log(e);
    }
    
} 



export const getUrlimagePlanet = (id) => async (dispatch) => {
    try{
        const defaultImage = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    const url = await imageAPI.getUrlImagePlanets(id)
    !url ? dispatch(setImageUrl(defaultImage)) : dispatch(setImageUrl(url))
    } catch(err){
        console.log(err);
    }
    
} //+

export const requestListPlanets = (page) =>  async (dispatch) => {
    try{
        const planet = await itemsListAPI.getListPlanets(page)
    const newList = !planet ? [] : planet.map(editStatePlanet)
    dispatch(setListPlanets(newList))
    const id = planet && await newList[0].id
    dispatch(setItemId(id))
    }
    catch(err){
        console.log(err);
    }
} //+

 

const editStatePlanet = (planet) => {
    return {
        id: +extractId(planet.url),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
        rotationPeriod: planet.rotation_period
    }
} // -----


export default peoplePageReduce