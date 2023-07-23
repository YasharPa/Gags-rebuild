import { GoTrash, GoPencil } from "react-icons/go";
import { useState } from "react";
import GagItemEdit from "./GagItemEdit";

function GagListItem({ gag, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteGag = () => {
    onDelete(gag.id);
  };

  const handleEditGag = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newContant) => {
    setShowEdit(false);
    onEdit(id, newContant);
  };
  let contant = <h3>{gag.contant}</h3>;
  if (showEdit) {
    contant = <GagItemEdit onSubmit={handleSubmit} gag={gag} />;
  }

  return (
    <div className="gag-item">
      <GoTrash
        className="trashcan-icon"
        onClick={() => {
          handleDeleteGag(gag.id);
        }}
      />
      <GoPencil
        className="pencil-icon"
        onClick={() => {
          handleEditGag();
        }}
      />
      <img src="https://api.imgflip.com/get_memes" alt="memes" />
      <div>{contant}</div>
    </div>
  );
}

export default GagListItem;
