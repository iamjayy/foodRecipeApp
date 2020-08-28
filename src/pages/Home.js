import React, { Component } from "react";
import Header from "../component/Header";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <Header title="Find Your Recipe">
        <Link
          to="recipes"
          className="text-uppercase btn btn-secondary btn-lg mt-3"
        >
          Search A Dish
        </Link>
      </Header>
    );
  }
}
