import { useContext, useEffect, useRef, useState } from "react";
import GagsContext from "../context/gags";
import Button from "./Button";

function CommentItemCreate({ gag }) {
  const { createComment } = useContext(GagsContext);
  const [comment, setComment] = useState("");
  const [showInput, setShowInput] = useState(true);
  const inputRef = useRef();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  useEffect(() => {
    if (showInput) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleCreate = () => {
    createComment(gag, comment);
    setComment("");
  };

  let contant;

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
          ref={inputRef}
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
