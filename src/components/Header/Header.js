import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <ul className="header">
        <li>
          <h1>Star DB</h1>
        </li>
        <li>
          <a href="">People</a>
        </li>
        <li>
          <a href="">Planets</a>
        </li>
        <li>
          <a href="">Starships</a>
        </li>
      </ul>
    );
  }
}
