import React from "react";
import ItemsList from "../ItemsList";
import SwapiService from "../../services/SwapiService";
import { withData } from "../hoc-helpers";
const swapiService = new SwapiService();
const { getAllPersons, getAllStarships, getAllPlanets } = swapiService;
const withChildFunc = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};
const renderPerson = ({ name, birthYear }) => (
  <div>
    <span>{name} </span>
    <span className="secondSpan"> ({birthYear})</span>
  </div>
);
const renderPlanet = ({ name, population }) => (
  <div>
    <span>{name}</span>
    <span className="secondSpan"> ({population})</span>
  </div>
);

const renderStarship = ({ name, model }) => (
  <div>
    <span>{name} </span>
    <span className="secondSpan"> ({model})</span>
  </div>
);

const PersonList = withData(
  withChildFunc(ItemsList, renderPerson),
  getAllPersons
);

const PlanetList = withData(
  withChildFunc(ItemsList, renderPlanet),
  getAllPlanets
);
const StarshipList = withData(
  withChildFunc(ItemsList, renderStarship),
  getAllStarships
);
export { PersonList, PlanetList, StarshipList };
