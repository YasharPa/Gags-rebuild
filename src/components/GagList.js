import { useContext, useState } from "react";
import GagsContext from "../context/gags";
import GagListItem from "./GagListItem";
import Button from "./Button";
import CommentItem from "./CommentItem";

function GagList() {
  const { gags } = useContext(GagsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(gags.length / itemsPerPage);
  const indexOfLastGag = currentPage * itemsPerPage;
  const indexOfFirstGag = indexOfLastGag - itemsPerPage;

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const rendredGags = gags.map((gag) => {
    return (
      <div>
        <GagListItem key={gag.id} gag={gag} />
        <div className="gag-comments">
          {"comments:"}
          <CommentItem gag={gag} />
        </div>
      </div>
    );
  });
  const currentGags = rendredGags.slice(indexOfFirstGag, indexOfLastGag);

  return (
    <div className="gag-list">
      {currentGags}
      <div className="pagination">
        <Button primary rounded onClick={handlePrevPage}>
          Prev
        </Button>
        {currentPage}
        <Button primary rounded onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default GagList;
