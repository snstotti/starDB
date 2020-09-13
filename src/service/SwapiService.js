export default class SwapiService {
  _apiBase = 'https://swapi.dev/api'
  _apiImage = 'https://starwars-visualguide.com/assets/img'

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`)
    if (!res.ok) {
      throw new Error(`Not fetch ${url} + received ${res.status}`)
    }
    return await res.json();
  }
 
  getImagePeople = ({ id }) => {
    return `${this._apiImage}/characters/${id}.jpg` // image people +
  }
  getImagePlanet = ({ id }) => {
    return `${this._apiImage}/planets/${id}.jpg` // image planet +
  }


  getAllPeople = async () => {
    const res = await this.getResource(`/people/`); // list all people +
    return res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResource(`/people/${id}/`); // profile person +
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResource('/planets/'); // list all planets +
    return res.results.map(this._transformPlanet)
  }
  getPlanet = async (id) => {
    const planet = await this.getResource(`/planets/${id}/`); // info selected planet +
    return this._transformPlanet(planet)
  }

  getAllStarships = async () => {
    const res = await this.getResource(`/starships/`); // list  all starships +
    return res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = this.getResource(`/starships/${id}/`) // info selected starships +
    return this._transformStarship(starship);
    
  }
  
  _extractId = (item) => {

    const idRegExp = /\/([0-9]*)\/$/;  // id
    return item.url.match(idRegExp)[1]
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      diameter: planet.diameter,
      population: planet.population,
      rotationPeriod: planet.rotation_period
    }
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }

}





