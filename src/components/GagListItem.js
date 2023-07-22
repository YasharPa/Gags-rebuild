import { GoTrash } from "react-icons/go";

function GagListItem({ gag, onDelete }) {
  const handleDeleteGag = () => {
    onDelete(gag.id);
  };

  return (
    <div className="Gag-item">
      <GoTrash
        onClick={() => {
          handleDeleteGag(gag.id);
        }}
      />
      <div>{gag.contant}</div>
    </div>
  );
}

export default GagListItem;
