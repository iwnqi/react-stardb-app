import React, { Component } from "react";
import "./PlanetDetails.css";
export default class PlanetDetails extends Component {
  render() {
    return (
      <div className="PlanetDetails">
        <img
          height="240px"
          width="210px"
          src="https://miro.medium.com/max/3840/1*encF5EeouyEH8YTANng4Aw.png"
          alt="gov"
        />
        <div className="information">
          <h2>Name</h2>
          <p>popu</p>
          <p>rotation</p>
          <p>diam</p>
        </div>
      </div>
    );
  }
}
