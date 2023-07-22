import GagListItem from "./GagListItem";

function GagList({ gags }) {
  const rendredGags = gags.map((gag) => {
    return <GagListItem key={gag.id} gag={gag} />;
  });

  return rendredGags;
}

export default GagList;
