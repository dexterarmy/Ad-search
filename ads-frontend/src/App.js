import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import Scroll from "./Scroll";
import Cardlist from "./CardList";

import "./App.css";

function App() {
  const [ads, setAds] = useState([]);
  // const [searchField, setSearchField] = useState("");

  const onSearchChange = (event) => {
    let { value } = event.target;
    if (value.length > 2) {
      fetch(`http://localhost:4000/ads/${value}`)
        .then((res) => res.json())
        .then((res) => setAds(res.body))
        .catch((err) => console.log(err.message));
    } else {
      fetch("http://localhost:4000/ads")
        .then((res) => res.json())
        .then((res) => setAds(res.body))
        .catch((err) => console.log(err.message));
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/ads")
      .then((res) => res.json())
      .then((res) => setAds(res.body))
      .catch((err) => console.log(err.message));
  }, []);

  if (!ads || ads.length === 0) {
    return (
      <div className="tc">
        <h1 className="f1">Ads Search</h1>
        <SearchBox searchChange={onSearchChange} />
      </div>
    );
  } else {
    return (
      <div className="tc">
        <h1 className="f1">Ads Search</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <Cardlist ads={ads} />
        </Scroll>
      </div>
    );
  }
}

export default App;
