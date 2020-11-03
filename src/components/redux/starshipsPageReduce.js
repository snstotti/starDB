import { imageAPI, itemsListAPI, personalAPI } from "../API/Api"
import { extractId } from "../helpers/getIdFromImage"

const SET_STARSHIPS_INFO = 'SET_STARSHIPS_INFO'
const SET_IMAGE_URL_STARSHIPS = 'SET_IMAGE_URL_STARSHIPS'
const SET_LIST_STARSHIPS = 'SET_LIST_STARSHIPS'
const SET_ID_ITEM_STARSHIPS = 'SET_ID_ITEM_STARSHIPS'
const SET_NEW_PAGE_STARSHIPS = 'SET_NEW_PAGE_STARSHIPS'



let initialState = {
    imageUrlStarships: null,
    listStarships: [],
    idItemStarships: 1,
    starshipsInfo: [],
    pageStarships: 1
}

const starshipsPageReduce =(state = initialState, action)=>{

    switch (action.type) {

        case SET_IMAGE_URL_STARSHIPS :{
            return { ...state, imageUrlStarships: action.imageUrlStarships}
        }
        case SET_LIST_STARSHIPS :{
           
            return { ...state, listStarships: action.listStarships}
        }
        case SET_STARSHIPS_INFO :{
           
            return { ...state, starshipsInfo: [action.starshipsInfo]}
        }
        case SET_ID_ITEM_STARSHIPS :{
           
            return { ...state, idItemStarships: action.idItemStarships}
        }
        case SET_NEW_PAGE_STARSHIPS :{
           
            return { ...state, pageStarships: action.pageStarships}
        }      


        default: return state
    }
    
    
}

export const setImageUrl = imageUrlStarships => ({type: SET_IMAGE_URL_STARSHIPS, imageUrlStarships}) //+
export const setListStarships = listStarships => ({type: SET_LIST_STARSHIPS, listStarships}) //+

export const setStarshipsInfo = starshipsInfo => ({type: SET_STARSHIPS_INFO, starshipsInfo})
export const setItemId = idItemStarships => ({type: SET_ID_ITEM_STARSHIPS, idItemStarships})
export const setNewPage = pageStarships => ({type: SET_NEW_PAGE_STARSHIPS, pageStarships})





export const setStartIdStarships = (id) => async (dispatch) => {   
    await dispatch(setItemId(id))   
}

export const togglePageStarships = (toggle='p', page) => async (dispatch) => {  
    
    const newPage = toggle === 'm' ? page - 1 : page + 1
   
   await dispatch(setNewPage(newPage))

   
}


export const requestStarshipsInfo = (id) => async (dispatch) => {
    
    const Starships = await personalAPI.getStarshipsInfo(id)
    dispatch(setStarshipsInfo(editStateStarships(Starships)))
    
}  //+


export const getUrlimageStarships = (id) => async (dispatch) => {
    try{
        const defaultImage = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    const url = await imageAPI.getUrlImageStarships(id)
    !url ? dispatch(setImageUrl(defaultImage)) : dispatch(setImageUrl(url))
    } catch(e){
        console.log(e)
    }
    
    
    
} //+

export const requestListStarships = (page) => async (dispatch) => {
    try{
        const starships = await itemsListAPI.getListStarships(page)
    const newList = !starships ? [] : starships.map(editStateStarships)
    dispatch(setListStarships(newList))
    const id = starships && await newList[0].id
    dispatch(setItemId(id))
    } catch(e){
        console.log(e);
    }
    
   
} //+


const editStateStarships = (starships) => {
    return { 
        id: +extractId(starships.url) ,
        name: starships.name,
        model: starships.model,
        manufacturer: starships.manufacturer,
        costInCredits: starships.cost_in_credits,
        length: starships.length,
        crew: starships.crew,
        passengers: starships.passengers,
        cargo_capacity: starships.cargo_capacity
    }
} 

export default starshipsPageReduce