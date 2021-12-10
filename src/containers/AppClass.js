/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      robots: [],
      searchFields: "",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }

  onChangeSearch = (event) => {
    this.setState({ searchFields: event.target.value });
  };

  render() {
    const { robots, searchFields } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchFields.toLowerCase());
    });

    {
      return !robots.length ? (
        <h1 className="title tc">Loading...</h1>
      ) : (
        <div className="tc">
          <h1 className="title f1">RoboFriends</h1>
          <SearchBox onSearch={this.onChangeSearch} />
          <Scroll>
            {filteredRobots.length > 0 ? (
              <CardList robots={filteredRobots} />
            ) : (
              <h1 className=" title f3">No Result Found....</h1>
            )}
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
