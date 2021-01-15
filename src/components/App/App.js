import "./App.css";
import React from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import SwapiService from "../../services/SwapiService";
import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
  PersonList,
  PlanetList,
  StarshipList,
} from "../sw-components";
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
    const { itemSelected } = this.state;
    return (
      <div className="App">
        <Header />
        <RandomPlanet />
        <div>
          <PersonList />
          <PersonDetails id={itemSelected}></PersonDetails>
        </div>
        <div>
          <StarshipList />
          <PlanetDetails id={itemSelected}></PlanetDetails>
        </div>
        <div>
          <PlanetList />

          <StarshipDetails id={itemSelected}></StarshipDetails>
        </div>
      </div>
    );
  }
}
