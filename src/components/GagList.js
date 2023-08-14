import { useEffect, useState } from "react";
import { useFetchGagsQuery } from "../store";
import GagListItem from "./GagListItem";
import Button from "./Button";
import CommentItem from "./CommentItem";
import Skeleton from "./Skeleton";
function GagList() {
  const { data, isLoading, error } = useFetchGagsQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  let totalPages = 1;
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

  let gagsContent;
  let currentGags;

  if (isLoading) {
    return (gagsContent = <Skeleton times={3} className="active-skeleton" />);
  } else if (error) {
    return (gagsContent = <div>Error loading gags..</div>);
  } else {
    totalPages = Math.ceil(data.length / itemsPerPage);

    gagsContent = data.map((gag) => {
      return (
        <div key={gag.id}>
          <GagListItem gag={gag} />
          {/* <CommentItem gag={gag} /> */}
        </div>
      );
    });
    currentGags = gagsContent.slice(indexOfFirstGag, indexOfLastGag);
  }

  return (
    <div>
      <div>{currentGags}</div>
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
