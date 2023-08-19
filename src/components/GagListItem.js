import { GoTrash, GoPencil, GoThumbsup, GoComment } from "react-icons/go";
import { useState } from "react";
import GagItemEdit from "./GagItemEdit";
import CommentItemCreate from "./CommentItemCreate";
import {
  useRemoveGagMutation,
  useAddLikeByIdMutation,
} from "../store/apis/gagsApi";

function GagListItem({ gag }) {
  const [removeGag, results] = useRemoveGagMutation();
  const [addLikeById] = useAddLikeByIdMutation();
  const [showEdit, setShowEdit] = useState(false);
  const [showAddCoomment, setShowAddCoomment] = useState(false);

  const handleDeleteGag = () => {
    console.log(gag.id);
    removeGag(gag);
    console.log(results);
  };

  const handleEditGag = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = () => {
    setShowEdit(false);
  };

  const handleAddLike = () => {
    addLikeById(gag);
  };

  const handleAddComment = () => {
    setShowAddCoomment(!showAddCoomment);
  };
  let comment = "";
  let content = (
    <>
      <div>
        <h3>{gag.content}</h3>
      </div>
      <img alt="Gags" src={gag.url} className="gag-image" />
    </>
  );

  if (showEdit) {
    content = <GagItemEdit onSubmit={handleSubmit} gag={gag} />;
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
      <div>
        <div className="gag-contant">{content}</div>
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
    </div>
  );
}

export default GagListItem;
