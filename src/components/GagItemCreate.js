import { useState, useContext } from "react";
import GagsContext from "../context/gags";

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
        <button>Create</button>
      </form>
    </div>
  );
}
export default GagItemCreate;
