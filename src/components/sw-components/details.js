import React from "react";
import SwapiService from "../../services/SwapiService";
import ItemDetails from "../ItemDetails";
import { Record } from "../ItemDetails/ItemDetails";
const swapiService = new SwapiService();
const {
  getPersonImage,
  getStarshipImage,
  getPlanetImage,
  getPerson,
  getStarship,
  getPlanet,
} = swapiService;

const PersonDetails = ({ id }) => {
  return (
    <ItemDetails id={id} getItem={getPerson} getImage={getPersonImage}>
      <Record field="gender" label="Gender - " />
      <Record field="eyeColor" label="Eye Color - " />
      <Record field="birthYear" label="B Year - " />
    </ItemDetails>
  );
};
const StarshipDetails = ({ id }) => {
  return (
    <ItemDetails id={id} getItem={getStarship} getImage={getStarshipImage}>
      <Record field="model" label="Model - " />
      <Record field="costInCredits" label="Cost - " />
      <Record field="crew" label="Crew - " />
    </ItemDetails>
  );
};
const PlanetDetails = ({ id }) => {
  return (
    <ItemDetails id={id} getItem={getPlanet} getImage={getPlanetImage}>
      <Record field="population" label="Population - " />
      <Record field="rotationPeriod" label="Rotation Period - " />
      <Record field="gravity" label="Gravity - " />
    </ItemDetails>
  );
};
export { PersonDetails, PlanetDetails, StarshipDetails };
