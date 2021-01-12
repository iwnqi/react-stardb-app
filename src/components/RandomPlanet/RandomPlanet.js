import React, { Component } from "react";
import Spinner from "../Spinner";
import "./RandomPlanet.css";
import swapiService from "../../services/SwapiService";
export default class RandomPlanet extends Component {
  swapiService = new swapiService();
  state = {
    planet: {},
    loads: true,
  };

  componentDidMount() {
    this.setPlanet();
  }
  id = Math.floor(Math.random() * 17 + 2);
  onPlanetSeted = (planet) => {
    this.setState({ planet, loads: false });
  };
  onError = (err) => {
    alert("oshibka,bro", err);
  };

  setPlanet() {
    this.swapiService
      .getPlanet(this.id)
      .then(this.onPlanetSeted)
      .catch(this.onError);
  }
  PlanetView = ({ planet }) => {
    const {
      name,
      population,
      rotationPeriod,
      diameter,
      gravity,
      terrain,
    } = planet;

    return (
      <React.Fragment>
        <img
          height="240px"
          width="210px"
          src={`https://starwars-visualguide.com/assets/img/planets/${this.id}.jpg`}
          alt="gov"
        />
        <div className="information">
          <h2>{name}</h2>
          <p>Population {population}</p>
          <p>Rotation Period {rotationPeriod}</p>
          <p>Diameter {diameter}</p>
          <p>Gravity {gravity}</p>
          <p>Terrain {terrain}</p>
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { planet, loads } = this.state;

    const spinner = loads ? <Spinner /> : null;
    const content = loads ? null : <this.PlanetView planet={planet} />;
    return (
      <div className="RandomPlanet">
        {content}
        {spinner}
      </div>
    );
  }
}
