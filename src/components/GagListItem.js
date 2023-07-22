import { useState } from "react";

function GagListItem() {
  const [contant, setContant] = useState("hey my name is yashar");
  const [like, setLike] = useState(0);
  const [isEdit, setIsEdit] = useState(false);

  const handleLike = () => {
    setLike(like + 1);
  };
  const handleDislike = () => {
    if (like > 0) {
      setLike(like - 1);
    }
  };
  const handleEditContant = (contant) => {
    setContant(contant);
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <div></div>
    </div>
  );
}

export default GagListItem;
