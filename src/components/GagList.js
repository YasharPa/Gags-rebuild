import { useContext, useState, useEffect } from "react";
import GagsContext from "../context/gags";
import GagListItem from "./GagListItem";
import Button from "./Button";

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
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  const rendredGags = gags.map((gag) => {
    return <GagListItem key={gag.id} gag={gag} />;
  });
  const currentGags = rendredGags.slice(indexOfFirstGag, indexOfLastGag);

  return (
    <div className="gag-list">
      {currentGags}
      <div className="pagination">
        <Button secondary rounded onClick={handlePrevPage}>
          Prev
        </Button>
        {currentPage}
        <Button secondary rounded onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default GagList;
