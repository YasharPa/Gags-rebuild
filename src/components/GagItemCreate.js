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
  const handleCreate = () => {
    createGag(contant);
    setContant("");
  };

  const actionBar = (
    <div>
      <Button
        primary
        rounded
        onClick={() => {
          handleClose();
          handleCreate();
        }}
      >
        Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <div>
        <h1>Create Gag </h1>
        Name: <input value={contant} onChange={handleChange} />
      </div>
    </Modal>
  );
  return (
    <div className="gag-create">
      <Button onClick={handleClick} primary rounded>
        Create
      </Button>
      <form
        className="form gag-create"
        onSubmit={(event) => {
          event.preventDefault();
          handleCreate();
        }}
      >
        {showModal && modal}
      </form>
    </div>
  );
}
export default GagItemCreate;
