import { useState } from "react";

function GagItemEdit({ gag, onSubmit }) {
  const [newContant, setNewContant] = useState(gag.contant);

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(gag.id, newContant);
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
