import { useState, useContext } from "react";
import GagsContext from "../context/gags";

function GagItemEdit({ gag, onSubmit }) {
  const [newContant, setNewContant] = useState(gag.contant);
  const { editGagById } = useContext(GagsContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editGagById(gag.id, newContant);
  };

  const handleChangeContant = (event) => {
    setNewContant(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{gag.contant}</label>
      <input
        className="input"
        placeholder="what is your thoughts?"
        value={newContant}
        onChange={handleChangeContant}
      ></input>
      <button>Accept</button>
    </form>
  );
}

export default GagItemEdit;
