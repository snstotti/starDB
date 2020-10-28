import { imageAPI, itemsListAPI, personalAPI } from "../API/Api"
import { extractId } from "../helpers/getIdFromImage"

const SET_PEOPLE_INFO = 'SET_PEOPLE_INFO'
const SET_IMAGE_URL_PEOPLE = 'SET_IMAGE_URL_PEOPLE'
const SET_LIST_PEOPLE = 'SET_LIST_PEOPLE'
const SET_ID_ITEM_PEOPLE = 'SET_ID_ITEM_PEOPLE'
const SET_NEW_PAGE_PEOPLE = 'SET_NEW_PAGE_PEOPLE'


let initialState = {
    imageUrlPeople: null,
    listPeople: [],
    idItemPeople: 1,
    
    peopleInfo: [],
    pagePeople: 1
}

const peoplePageReduce =(state = initialState, action)=>{

    switch (action.type) {

        case SET_IMAGE_URL_PEOPLE :{
            return { ...state, imageUrlPeople: action.imageUrlPeople}
        }
        case SET_LIST_PEOPLE :{
           
            return { ...state, listPeople: action.listPeople}
        }
        case SET_PEOPLE_INFO :{
           
            return { ...state, peopleInfo: [action.peopleInfo]}
        }
        case SET_ID_ITEM_PEOPLE :{
           
            return { ...state, idItemPeople: action.idItemPeople}
        }
        case SET_NEW_PAGE_PEOPLE :{
           
            return { ...state, pagePeople: action.pagePeople}
        }
       


        default: return state
    }
    
    
}

export const setImageUrl = imageUrlPeople => ({type: SET_IMAGE_URL_PEOPLE, imageUrlPeople}) 
export const setListPeople = listPeople => ({type: SET_LIST_PEOPLE, listPeople}) 
export const setPeopleInfo = peopleInfo => ({type: SET_PEOPLE_INFO, peopleInfo})
export const setItemId = idItemPeople => ({type: SET_ID_ITEM_PEOPLE, idItemPeople})
export const setNewPage = pagePeople => ({type: SET_NEW_PAGE_PEOPLE, pagePeople})





export const setStartIdPeople = (id) => async (dispatch) => {   
    await dispatch(setItemId(id))   
}

export const togglePagePeople = (toggle='p', page) => async (dispatch) => {  
    const newPage = toggle === 'm' ? page - 1 : page + 1
   await dispatch(setNewPage(newPage))
}



// export const planetInfo = (id) => async (dispatch) => {
//     const planets = await personalAPI.getPlanet(id)
//     dispatch(setPlanetInfo(editStatePlanet(planets)))
// } // -----

// export const toggleNextPage = (page) => async (dispatch) => {  
//     const nextPage = page + 1 
//     await dispatch(setNewPage(nextPage))
// }
// export const togglePrevPage = (page) => async (dispatch) => {   
//     const prevPage = page - 1
//     await dispatch(setNewPage(prevPage))
// }

// export const setStartId = (id) => async (dispatch) => {   
//     await dispatch(setItemId(id))
// } //+


export const requestPeopleInfo = (id) => async (dispatch) => {
    
    const people = await personalAPI.getPerson(id)
    dispatch(setPeopleInfo(editStatePeople(people)))
    
}  //+


export const getUrlimagePeople = (id) => async (dispatch) => {
   
    const url = await imageAPI.getUrlImagePeople(id)
    
    dispatch(setImageUrl(url))
    
} //+

export const requestListPeople = (page) => async (dispatch) => {
    const people = await itemsListAPI.getListPeople(page)
    const newList = !people ? [] : people.map(editStatePeople)
    dispatch(setListPeople(newList))
    const id = people && await newList[0].id
    dispatch(setItemId(id))
   
} //+

const editStatePeople = (people) => {
    return {
        id: +extractId(people.url),
        name: people.name,
        gender: people.gender,
        birthYear: people.birth_year,
        eyeColor: people.eye_color,
        hairColor: people.hair_color
    }
} 

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