import { useState, useContext } from "react";
import GagsContext from "../context/gags";
import Button from "./Button";

function GagItemCreate() {
  const { createGag } = useContext(GagsContext);

  const [contant, setContant] = useState("");
  const handleChange = (event) => {
    setContant(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createGag(contant);
    setContant("");
  };
  return (
    <div className="gag-create">
      <form onSubmit={handleSubmit}>
        <label>Create Gag </label>
        <input value={contant} onChange={handleChange} />
        <Button className="primary-button">Create</Button>
      </form>
    </div>
  );
}
export default GagItemCreate;
