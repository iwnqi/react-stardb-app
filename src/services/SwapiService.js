export default class SwapiService {
  _apiBase = "https://swapi.dev/api/";
  _apiImgBase = "https://starwars-visualguide.com/assets/img/";
  _idRegExp = /\/([0-9]*)\/$/;
  _extractId(planet) {
    return planet.url.match(this._idRegExp)[1];
  }
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${url}, ${res.status}`);
    }
    return await res.json();
  };
  getPersonImage = (item) => {
    return `${this._apiImgBase}characters/${item.id}.jpg`;
  };
  getStarshipImage = (item) => {
    return `${this._apiImgBase}starships/${item.id}.jpg`;
  };
  getPlanetImage = (item) => {
    return `${this._apiImgBase}planets/${item.id}.jpg`;
  };
  getAllPersons = async () => {
    const res = await this.getResource(`people/`);
    return res.results.map(this._setPerson);
  };
  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}/`);
    return this._setPerson(person);
  };
  getAllStarships = async () => {
    const res = await this.getResource(`starships/`);
    return res.results.map(this._setStarship);
  };
  getStarship = async (id) => {
    const starship = await this.getResource(`starships/${id}/`);
    return this._setStarship(starship);
  };

  getAllPlanets = async () => {
    const res = await this.getResource(`planets/`);
    return res.results.map(this._setPlanet);
  };

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}/`);
    return this._setPlanet(planet);
  };
  _setPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
      gravity: planet.gravity,
      terrain: planet.terrain,
    };
  };
  _setPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };
  _setStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
    };
  };
}
