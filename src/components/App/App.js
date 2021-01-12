import "./App.css";
import React from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";

import ItemDetails, { Record } from "../ItemDetails/ItemDetails";
import SwapiService from "../../services/SwapiService";
import { PersonList, PlanetList, StarshipList } from "../sw-components";
export default class App extends React.Component {
  swapiService = new SwapiService();
  state = {
    itemSelected: 5,
  };
  onItemSelected = (id) => {
    this.setState({
      itemSelected: id,
    });
  };
  render() {
    const {
      getPersonImage,
      getPlanetImage,
      getStarshipImage,
      getPerson,
      getPlanet,
      getStarship,
    } = this.swapiService;
    const { itemSelected } = this.state;
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <div>
          <PersonList>
            {({ name, birthYear }) => (
              <div>
                <span>{name} </span>
                <span className="secondSpan"> ({birthYear})</span>
              </div>
            )}
          </PersonList>
          <ItemDetails
            id={itemSelected}
            getItem={getPerson}
            getImage={getPersonImage}
          >
            <Record field="gender" label="Gender - " />
            <Record field="eyeColor" label="Eye Color - " />
            <Record field="birthYear" label="B Year - " />
          </ItemDetails>
        </div>
        <div>
          <StarshipList>
            {({ name, costInCredits }) => (
              <div>
                <span>{name} </span>
                <span className="secondSpan"> ({costInCredits})</span>
              </div>
            )}
          </StarshipList>
          <ItemDetails
            id={itemSelected}
            getItem={getStarship}
            getImage={getStarshipImage}
          >
            <Record field="model" label="Model - " />
            <Record field="costInCredits" label="Cost - " />
            <Record field="crew" label="Crew - " />
          </ItemDetails>
        </div>
        <div>
          <PlanetList>
            {({ name, gravity }) => (
              <div>
                <span>{name}</span>
                <span className="secondSpan"> ({gravity})</span>
              </div>
            )}
          </PlanetList>
          <ItemDetails
            id={itemSelected}
            getItem={getPlanet}
            getImage={getPlanetImage}
          >
            <Record field="population" label="Population - " />
            <Record field="rotationPeriod" label="Rotation Period - " />
            <Record field="gravity" label="Gravity - " />
          </ItemDetails>
        </div>
      </div>
    );
  }
}
