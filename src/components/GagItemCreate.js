import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { useAddGagMutation } from "../store";

function GagItemCreate() {
  const [contant, setContant] = useState("");
  const [url, setUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const nameInputRef = useRef();
  const [addGag] = useAddGagMutation();

  const handleContantChange = (event) => {
    setContant(event.target.value);
  };
  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCreate = () => {
    const gagProp = { contant, url: url };
    addGag(gagProp).then(() => {
      console.log(gagProp.url);
      setContant("");
      setUrl("");
    });
  };

  useEffect(() => {
    if (showModal) {
      nameInputRef.current.focus();
    }
  }, [showModal]);
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
      <div className="create-modal">
        <h1>Create Gag </h1>
        <label>
          Name:{" "}
          <input
            ref={nameInputRef}
            value={contant}
            onChange={handleContantChange}
          />
        </label>
        <label>
          Image Link: <input value={url} onChange={handleUrlChange} />
        </label>
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
