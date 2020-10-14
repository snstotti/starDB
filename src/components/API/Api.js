import Axios from "axios"

const instance = Axios.create({
    baseURL: 'https://swapi.dev/api/'
})
const instanceImage = Axios.create({
    baseURL: 'https://starwars-visualguide.com/assets/img/'
})



export const imageAPI = {
    
    getImageUrl(name,imageId){
        return (
            instanceImage.get(`${name}/${imageId}.jpg`)
                .then(responce => responce.request.responseURL)
        )
    }
    
}


export const itemsListAPI = {
    
    getList(name,page) {
        return (
            instance.get(`${name}/?page=${page}`)
                .then(responce => responce.data.results)
        )
    }
}
// itemsListAPI.getListPeople(2)
export const personalAPI = {
    
    getPerson(name,id) {
        return (
            instance.get(`${name}/${id}`)
            .then(responce => responce.data)
        )
    }
}


export const usersAPI = {

    getUsers() {
        
        return (
            instance.get(`people/`)
                // .then(responce => console.log(responce))
        )
    }
}

// console.log(itemsListAPI.getListPeople(1))