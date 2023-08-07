import { GoTrash, GoPencil, GoThumbsup, GoComment } from "react-icons/go";
import { useContext, useState, useEffect } from "react";
import GagItemEdit from "./GagItemEdit";
import GagsContext from "../context/gags";
import Skeleton from "./Skeleton";
import CommentItemCreate from "./CommentItemCreate";

function GagListItem({ gag }) {
  const { deleteGagById, addLikeToGagById } = useContext(GagsContext);
  const [showEdit, setShowEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showAddCoomment, setShowAddCoomment] = useState(false);
  const handleDeleteGag = () => {
    deleteGagById(gag.id);
  };

  const handleEditGag = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const handleAddLike = () => {
    addLikeToGagById(gag, gag.likes);
  };

  const handleAddComment = () => {
    setShowAddCoomment(!showAddCoomment);
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, [gag]);
  let comment = "";
  let contant = (
    <>
      <div>
        <h3>{gag.contant}</h3>
      </div>
      <img alt="Gags" src={gag.url} className="gag-image" />
    </>
  );

  if (showEdit) {
    contant = <GagItemEdit onSubmit={handleSubmit} gag={gag} />;
  }
  if (showAddCoomment) {
    comment = <CommentItemCreate gag={gag} />;
  }
  return (
    <div className="gag-item">
      <label className="gag-icons">
        <GoTrash
          className="trashcan-icon"
          onClick={() => {
            handleDeleteGag(gag.id);
          }}
        />
        <GoPencil
          className="pencil-icon"
          onClick={() => {
            handleEditGag();
          }}
        />
      </label>

      {isLoading ? (
        <Skeleton times={3} className="active-skeleton" />
      ) : (
        <div>
          <div className="gag-contant">{contant}</div>
          <label className="reaction-bar">
            <span>{gag.likes}</span>
            <GoThumbsup onClick={handleAddLike} />
            <GoComment
              onClick={() => {
                handleAddComment();
              }}
            />
          </label>
          {comment}
        </div>
      )}
    </div>
  );
}

export default GagListItem;
