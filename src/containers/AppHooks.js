/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import "./App.css";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import SearchBox from "../components/SearchBox";

function App() {
  // states
  const [robots, setRobots] = useState([]);
  const [searchFields, setsearchFields] = useState("");

  // componentDidMount
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => setRobots(users));
  });

  // event
  const onChangeSearch = (event) => {
    setsearchFields(event.target.value);
  };

  // filter in new Array (robot)
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchFields.toLowerCase());
  });

  {
    return !robots.length ? (
      <h1 className="title tc">Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="title f1">RoboFriends</h1>
        <SearchBox onSearch={onChangeSearch} />
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

export default App;
