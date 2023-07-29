import { useContext } from "react";
import GagsContext from "../context/gags";
import GagListItem from "./GagListItem";

function GagList() {
  const { gags } = useContext(GagsContext);

  const rendredGags = gags.map((gag) => {
    return <GagListItem key={gag.id} gag={gag} />;
  });

  return <div className="gag-list">{rendredGags}</div>;
}

export default GagList;
