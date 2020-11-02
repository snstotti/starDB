import Axios from "axios"

const instance = Axios.create({
    baseURL: '//swapi.dev/api/',
})
const instanceImage = Axios.create({
    baseURL: '//starwars-visualguide.com/assets/img/',
})


export const imageAPI = {
    
    getUrlImagePeople(imageId){
       
        return (
            instanceImage.get(`characters/${imageId}.jpg`)
                .then(responce => responce.request.responseURL)
                
        )
    },
    getUrlImagePlanets(imageId){
        return (
            instanceImage.get(`planets/${imageId}.jpg`)
                .then(responce => responce.request.responseURL)
                .catch(()=>null)
        )
    },
    getUrlImageStarships(imageId){
        return (
            instanceImage.get(`starships/${imageId}.jpg`)
                .then(responce => responce.request.responseURL)
                .catch(()=>null)
        )
    }
    
}


export const itemsListAPI = {
    
    getListPeople(page) {
        return (
            instance.get(`people/?page=${page}`)
                .then(responce => responce.data.results)
                .catch(()=>null)
                
        )
    },
    getListPlanets(page) {
        return (
            instance.get(`planets/?page=${page}`)
                .then(responce => responce.data.results)
                .catch(()=>null)
        )
    },
    getListStarships(page) {
        return (
            instance.get(`starships/?page=${page}`)
                .then(responce => responce.data.results)
                .catch(()=>null)
        )
    }
}
export const personalAPI = {
    getPerson(id) {
        return (
            instance.get(`people/${id}`)
            .then(responce =>responce.data)
        )
    },
    getPlanetInfo(id) {
        return (
            instance.get(`planets/${id}`)
            .then(responce =>responce.data)
        )
    },
    getStarshipsInfo(id) {
        return (
            instance.get(`starships/${id}`)
            .then(responce =>responce.data)
        )
    }
}
