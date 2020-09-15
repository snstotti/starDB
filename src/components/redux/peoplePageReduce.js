import { imageAPI, itemsListAPI, personalAPI } from "../API/Api"
import { extractId } from "../helpers/getIdFromImage"

const SET_PEOPLE_INFO = 'SET_PEOPLE_INFO'
const SET_IMAGE_URL = 'SET_IMAGE_URL'
const SET_LIST_PEOPLE = 'SET_LIST_PEOPLE'
const SET_ID_ITEM = 'SET_ID_ITEM'
const SET_NEW_PAGE = 'SET_NEW_PAGE'

let initialState = {
    imageUrl: null,
    listPeople: [],
    idItem: null,
    peopleInfo: [],
    page: 1
}

const peoplePageReduce =(state = initialState, action)=>{

    switch (action.type) {

        case SET_IMAGE_URL :{
            return { ...state, imageUrl: action.imageUrl}
        }
        case SET_LIST_PEOPLE :{
           
            return { ...state, listPeople: action.listPeople}
        }
        case SET_PEOPLE_INFO :{
           
            return { ...state, peopleInfo: action.peopleInfo}
        }
        case SET_ID_ITEM :{
           
            return { ...state, idItem: action.idItem}
        }
        case SET_NEW_PAGE :{
           
            return { ...state, page: action.page}
        }

        default: return state
    }
    
    
}

export const setImageUrl = imageUrl => ({type: SET_IMAGE_URL, imageUrl}) //+
export const setListPeople = listPeople => ({type: SET_LIST_PEOPLE, listPeople}) //+
// export const setPlanetInfo = planetInfo => ({type: SET_PLANET_INFO, planetInfo}) -----
export const setPeopleInfo = peopleInfo => ({type: SET_PEOPLE_INFO, peopleInfo})
export const setItemId = idItem => ({type: SET_ID_ITEM, idItem})
export const setNewPage = page => ({type: SET_NEW_PAGE, page})


// export const planetInfo = (id) => async (dispatch) => {
//     const planets = await personalAPI.getPlanet(id)
//     dispatch(setPlanetInfo(editStatePlanet(planets)))
// } // -----

export const toggleNextPage = (page) => async (dispatch) => {  
    const nextPage = page + 1 
    await dispatch(setNewPage(nextPage))
}
export const togglePrevPage = (page) => async (dispatch) => {   
    const prevPage = page - 1
    await dispatch(setNewPage(prevPage))
}

export const setStartId = (id) => async (dispatch) => {   
    await dispatch(setItemId(id))
} //+


export const requestPeopleInfo = (id) => async (dispatch) => {
    
    const people = await personalAPI.getPerson(id)
    dispatch(setPeopleInfo(editStatePeople(people)))
    
}  //+


export const setUrlimageProfile = (id) => async (dispatch) => {
    const url = await imageAPI.getImagePeople(id)
    dispatch(setImageUrl(url))
} //+

export const requestListPeople = (page) => async (dispatch) => {
    const people = await itemsListAPI.getListPeople(page)
    const newList = people.map(editStatePeople)
    dispatch(setListPeople(newList))
    const id = await newList[0].id
    dispatch(setItemId(id))
} //+

const editStatePeople = (people) => {
    return {
        id: extractId(people.url),
        name: people.name,
        gender: people.gender,
        birthYear: people.birth_year,
        eyeColor: people.eye_color,
        hairColor: people.hair_color
    }
} //+

// const editStatePlanet = (planets) => {
//     return {
//         id: extractId(planets.url),
//         name: planets.name,
//         diameter: planets.diameter,
//         population: planets.population,
//         rotationPeriod: planets.rotation_period
//     }
// } // -----

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