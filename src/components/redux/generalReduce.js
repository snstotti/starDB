
const SET_ID_ITEM = 'SET_ID_ITEM'
const SET_NEW_PAGE = 'SET_NEW_PAGE'


let initialState = {
    placeholderImageUrl: 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg',
    idItem: null,
    page: 1
}

const peoplePageReduce =(state = initialState, action)=>{

    switch (action.type) {

        case SET_ID_ITEM :{
           
            return { ...state, idItem: action.idItem}
        }
        case SET_NEW_PAGE :{
           
            return { ...state, page: action.page}
        }
      

        default: return state
    }
    
    
}

export const setNewPage = page => ({type: SET_NEW_PAGE, page})
export const setItemId = idItem => ({type: SET_ID_ITEM, idItem}) //general option



export const setStartId = (id) => async (dispatch) => {   
    await dispatch(setItemId(id))
}

export default peoplePageReduce