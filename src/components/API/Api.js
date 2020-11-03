import Axios from "axios"

const instance = Axios.create({
    baseURL: 'https://swapi.dev/api/',
    responseType: "json"
})
const instanceImage = Axios.create({
    baseURL: 'https://starwars-visualguide.com/assets/img/',
    responseType: "json"
})


export const imageAPI = {
    
    getUrlImagePeople(imageId){
       
        return (
            instanceImage(`characters/${imageId}.jpg`)
                .then(responce => responce.request.responseURL)
                
              
                
        )
    },
    getUrlImagePlanets(imageId){
        return (
            instanceImage(`planets/${imageId}.jpg`)
                .then(responce => responce.request.responseURL)
                .catch((error)=>console.log(error))
        )
    },
    getUrlImageStarships(imageId){
        return (
            instanceImage(`starships/${imageId}.jpg`)
                .then(responce => responce.request.responseURL)
                .catch(()=>null)
        )
    }
    
}


export const itemsListAPI = {
    
    getListPeople(page) {
        return (
            instance(`people/?page=${page}`)
                .then(responce => responce.data.results)
                .catch(()=>null)
        )
    },
    getListPlanets(page) {
        return (
            instance(`planets/?page=${page}`)
                .then(responce => responce.data.results)
                .catch(()=>null)
        )
    },
    getListStarships(page) {
        return (
            instance(`starships/?page=${page}`)
                .then(responce => responce.data.results)
                .catch(()=>null)
        )
    }
}
export const personalAPI = {
    getPerson(id) {
        return (
            instance(`people/${id}/`)
            .then(responce =>responce.data)
        )
    },
    getPlanetInfo(id) {
        return (
            instance(`planets/${id}/`)
            .then(responce =>responce.data)
        )
    },
    getStarshipsInfo(id) {
        return (
            instance(`starships/${id}/`)
            .then(responce =>responce.data)
        )
    }
}
