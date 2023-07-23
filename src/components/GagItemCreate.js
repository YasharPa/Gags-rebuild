import { useState } from "react";

function GagItemCreate({ onCreate }) {
  const [contant, setContant] = useState("");

  const handleChange = (event) => {
    setContant(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(contant);
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
