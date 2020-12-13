import { useState } from "react";
import { useHistory } from "react-router-dom";

const Breweries = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const submitForm = (e) => {
    e.preventDefault();

    history.push(`/brewery/${query}`);
  };

  return (
    <form onSubmit={submitForm}>
      query:
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
    </form>
  );
};

export default Breweries;
