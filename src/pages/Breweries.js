import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Breweries = () => {
  const [query, setQuery] = useState("");
  const [breweries, setBreweries] = useState([]);

  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    history.push(`/brewery/${query}`);
  };

  //   console.log("rerender from state changin");

  return (
    <form onSubmit={submitForm}>
      query:
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <h1> Brews</h1>
    </form>
  );
};

export default Breweries;
