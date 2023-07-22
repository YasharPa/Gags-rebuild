import GagListItem from "./GagListItem";

function GagList({ gags, onDelete }) {
  const rendredGags = gags.map((gag) => {
    return <GagListItem key={gag.id} gag={gag} onDelete={onDelete} />;
  });

  return rendredGags;
}

export default GagList;
