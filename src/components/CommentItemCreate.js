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
        onSubmit={(event) => {
          event.preventDefault();
          handleCreate();
          setShowInput(false);
        }}
        className="comment-create"
      >
        <label>
          <input
            onChange={handleCommentChange}
            placeholder="Write a Cooment"
            value={comment}
          ></input>
          <Button secondary rounded>
            Post
          </Button>
        </label>
      </form>
    );
  }

  return <div>{contant}</div>;
}

export default CommentItemCreate;
