import { GoTrash, GoPencil } from "react-icons/go";
import { useContext, useState } from "react";
import GagItemEdit from "./GagItemEdit";
import GagsContext from "../context/gags";

function GagListItem({ gag }) {
  const { deleteGagById } = useContext(GagsContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteGag = () => {
    deleteGagById(gag.id);
  };

  const handleEditGag = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
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
      <div className="gag-contant">{contant}</div>
    </div>
  );
}

export default GagListItem;
