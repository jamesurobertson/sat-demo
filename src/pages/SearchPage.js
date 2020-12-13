import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SearchPage = () => {
  const [results, setResults] = useState([]);
  const { searchParam } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.openbrewerydb.org/breweries/search?query=${searchParam}`
        );
        const data = await res.json();
        setResults(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [searchParam]);

  if (results.length === 0) {
    return <h1>No results found</h1>;
  }
  return (
    <div>
      {results.map((brewery) => {
        const { name, state, website_url, phone, id } = brewery;

        return (
          <div key={id} style={{ padding: "10px" }}>
            <h1>{name}</h1>
            <div>state: {state}</div>
            <div> phone number: {phone}</div>
            <a href={website_url}>{website_url}</a>
          </div>
        );
      })}
    </div>
  );
};

export default SearchPage;
