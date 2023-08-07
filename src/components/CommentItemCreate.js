import { useContext, useState } from "react";
import GagsContext from "../context/gags";
import Button from "./Button";

function CommentItemCreate({ gag }) {
  const { createComment } = useContext(GagsContext);
  const [comment, setComment] = useState("");
  const [showInput, setShowInput] = useState(true);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCreate = () => {
    createComment(gag, comment);
    setComment("");
  };
  let contant = <></>;
  if (showInput) {
    contant = (
      <form
        className="comment-form"
        onSubmit={(event) => {
          event.preventDefault();
          handleCreate();
          setShowInput(false);
        }}
      >
        <input
          className="comment-input"
          onChange={handleCommentChange}
          placeholder="Write a Comment"
          value={comment}
        ></input>
        <Button secondary rounded>
          Post
        </Button>
      </form>
    );
  }

  return <div className="comment-create">{contant}</div>;
}

export default CommentItemCreate;
