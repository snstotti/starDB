import { imageAPI, itemsListAPI, personalAPI } from "../API/Api"
import { extractId } from "../helpers/getIdFromImage"


const SET_IMAGE_URL = 'SET_IMAGE_URL'
const SET_LIST_PEOPLE = 'SET_LIST_PEOPLE'
const SET_ID_ITEM = 'SET_ID_ITEM'
const SET_NEW_PAGE = 'SET_NEW_PAGE'
const SET_ITEM_INFO = 'SET_ITEM_INFO'

let initialState = {
    imageUrl: null,
    list: [],
    idItem: null,
    page: 1,
    itemInfo: []
}

const peoplePageReduce =(state = initialState, action)=>{

    switch (action.type) {

        case SET_IMAGE_URL :{
            return { ...state, imageUrl: action.imageUrl}
        }
        case SET_LIST_PEOPLE :{
            return { ...state, list: action.list}
        }
        case SET_ITEM_INFO :{
           
            return { ...state, itemInfo: [action.itemInfo]}
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

export const setImageUrl = imageUrl => ({type: SET_IMAGE_URL, imageUrl}) 
export const setListPeople = list => ({type: SET_LIST_PEOPLE, list})
export const setItemId = idItem => ({type: SET_ID_ITEM, idItem})
export const setNewPage = page => ({type: SET_NEW_PAGE, page})
export const setItemInfo = itemInfo => ({type: SET_ITEM_INFO, itemInfo})

export const setStartId = (id) => async (dispatch) => {   
    await dispatch(setItemId(id))
}

export const setUrlimageProfile = (name,id) => async (dispatch) => {
    const url = await imageAPI.getImageUrl(name,id)
    dispatch(setImageUrl(url))
}

export const requestList = (name, page) => async (dispatch) => {
    const list = await itemsListAPI.getList(name, page)
    const newList = list.map(
        name === 'people' ? editStatePeople 
        : name === 'planets' ? editStatePlanet 
        : name === 'starships' ? editStateStarships 
        : null
    )
    dispatch(setListPeople(newList))
    const id = await newList[0].id
    dispatch(setItemId(id))
}

export const toggleNextPage = (page) => async (dispatch) => {  
    const nextPage = page + 1 
    await dispatch(setNewPage(nextPage))
}
export const togglePrevPage = (page) => async (dispatch) => {   
    const prevPage = page - 1
    await dispatch(setNewPage(prevPage))
}

export const requestItemInfo = (name, id) => async (dispatch) => {
    
    const newArr = await personalAPI.getPerson(name, id)
    dispatch(setItemInfo(
        name === 'people' ? editStatePeople(newArr)
        : name === 'planets' ? editStatePlanet(newArr) 
        : name === 'starships' ? editStateStarships(newArr) 
        : null))
} 

const editStatePeople = (people) => {
    return {
        id: extractId(people.url),
        name: people.name,
        gender: people.gender,
        birthYear: people.birth_year,
        eyeColor: people.eye_color,
        hairColor: people.hair_color
    }
}
const editStatePlanet = (planets) => {
    return {
        id: extractId(planets.url),
        name: planets.name,
        diameter: planets.diameter,
        population: planets.population,
        rotationPeriod: planets.rotation_period
    }
}

const editStateStarships = (starships) => {
        return {
            id: extractId(starships.url),
            name: starships.name,
            model: starships.model,
            manufacturer: starships.manufacturer,
            costInCredits: starships.costInCredits,
            length: starships.length,
            crew: starships.crew,
            passengers: starships.passengers,
            cargoCapacity: starships.cargoCapacity
        }
    }
export default peoplePageReduce