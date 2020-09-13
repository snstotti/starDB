import Axios from "axios"

const instance = Axios.create({
    baseURL: 'https://swapi.dev/api/'
})
const instanceImage = Axios.create({
    baseURL: 'https://starwars-visualguide.com/assets/img/'
})



export const imageAPI = {
    
    getImagePeople(imageId){
        return (
            instanceImage.get(`characters/${imageId}.jpg`)
                .then(responce => responce.request.responseURL)
        )
    },
    getImagePlanet(imageId) {
        return (
            instanceImage.get(`planets/${imageId}.jpg`)
        )
    },
    getImageStarships(imageId) {
        return (
            instanceImage.get(`starships/${imageId}.jpg`)
        )
    }
}


export const itemsListAPI = {
    
    getListPeople(page) {
        return (
            instance.get(`people/?page=${page}`)
                .then(responce => responce.data.results)
        )
    },
    getListPlanets() {
        return (
            instance.get(`planets`)
            .then(responce => responce.data.results)
        )
    },
    getListStarships(page) {
        return (
            instance.get(`starships/?page=${page}`)
            .then(responce => responce.data.results)
        )
    },
    
}
// itemsListAPI.getListPeople(2)
export const personalAPI = {
    
    getPerson(id) {
        return (
            instance.get(`people/${id}`)
            .then(responce => responce.data)
        )
    },
    getPlanet(id) {
        return (
            instance.get(`planets/${id}/`)
            .then(responce => responce.data)
        )
    },
    getStarship(id) {
        return (
            instance.get(`starships/${id}`)
        )
    },
    
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