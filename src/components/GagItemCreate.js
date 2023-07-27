import { useState, useContext } from "react";
import GagsContext from "../context/gags";
import Button from "./Button";
import Modal from "./Modal";

function GagItemCreate() {
  const { createGag } = useContext(GagsContext);
  const [contant, setContant] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (event) => {
    setContant(event.target.value);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    createGag(contant);
    setContant("");
  };
  const actionBar = (
    <div>
      <Button primary rounded onClick={handleClose}></Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <label>Create Gag </label>
      <input value={contant} onChange={handleChange} />
    </Modal>
  );
  return (
    <div className="gag-create">
      <form className="form gag-create" onSubmit={handleSubmit}>
        <Button onClick={handleClick} primary rounded>
          Create
        </Button>
      </form>
      {showModal && modal}
    </div>
  );
}
export default GagItemCreate;
