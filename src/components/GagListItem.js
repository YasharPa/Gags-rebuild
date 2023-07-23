import { GoTrash, GoPencil } from "react-icons/go";
import { useState } from "react";
import GagItemEdit from "./GagItemEdit";

function GagListItem({ gag, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteGag = () => {
    onDelete(gag.id);
  };

  const handleEditGag = () => {
    setShowEdit(!showEdit);
  };

  let contant = <h3>{gag.contant}</h3>;
  if (showEdit) {
    contant = <GagItemEdit gag={gag} />;
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
      <div>{contant}</div>
    </div>
  );
}

export default GagListItem;
