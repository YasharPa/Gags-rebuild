import { useContext } from "react";
import GagsContext from "../context/gags";
import GagListItem from "./GagListItem";

function GagList({ gags, onDelete, onEdit }) {
  const newgags = useContext(GagsContext);

  const rendredGags = gags.map((gag) => {
    return (
      <GagListItem key={gag.id} gag={gag} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  return (
    <div>
      {newgags}
      {rendredGags}
    </div>
  );
}

export default GagList;
