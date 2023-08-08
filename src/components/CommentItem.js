import { GoTrash } from "react-icons/go";
import { useContext } from "react";
import GagsContext from "../context/gags";

function CommentItem({ gag }) {
  const { comments } = gag;
  const { deleteComment } = useContext(GagsContext);
  const handleDeleteComment = (gag, id) => {
    console.log(id);
    deleteComment(gag, id);
  };

  const rendredComments = comments.map((comment) => {
    return (
      <div className="comments-contant" key={comment.id}>
        <div className="comment-trash">
          <GoTrash
            onClick={() => {
              handleDeleteComment(gag, comment.id);
            }}
          />
        </div>
        <div className="comment-text">{comment.text}</div>
      </div>
    );
  });
  const withoutCommentMesseage = (
    <div className="no-comment">There is no comments, Be the first!</div>
  );
  return (
    <div className="gag-comments">
      <div className="comments-title">Comments:</div>
      <div>
        {comments.length === 0 ? withoutCommentMesseage : rendredComments}
      </div>
    </div>
  );
}

export default CommentItem;
