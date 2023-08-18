import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useCreateCommentMutation } from "../store";

function CommentItemCreate({ gag }) {
  // const { createComment } = useContext(GagsContext);
  const [createComment] = useCreateCommentMutation();
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
    const params = {
      gag,
      newComment: comment,
    };
    createComment(params);
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
