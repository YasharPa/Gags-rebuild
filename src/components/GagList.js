import GagListItem from "./GagListItem";

function GagList({ gags, onDelete, onEdit }) {
  const rendredGags = gags.map((gag) => {
    return (
      <GagListItem key={gag.id} gag={gag} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  return rendredGags;
}

export default GagList;
