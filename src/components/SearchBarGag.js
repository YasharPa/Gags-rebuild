import { useState } from "react";
import Button from "./Button";

function SearchBarGag({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Search Gag</label>
        <input placeholder="Serch Gag" value={term} onChange={handleChange} />
        <Button type="submit" secondary rounded>
          Search
        </Button>
      </form>
    </div>
  );
}

export default SearchBarGag;
