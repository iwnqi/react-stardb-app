import React from "react";
import ItemsList from "../ItemsList";
import SwapiService from "../../services/SwapiService";
import { withData } from "../hoc-helpers";

const swapiService = new SwapiService();
const { getAllPersons, getAllStarships, getAllPlanets } = swapiService;

export default withData(ItemsList, getAllPersons);

const PersonList = withData(ItemsList, getAllPersons);
const PlanetList = withData(ItemsList, getAllPlanets);
const StarshipList = withData(ItemsList, getAllStarships);
export { PersonList, PlanetList, StarshipList };
