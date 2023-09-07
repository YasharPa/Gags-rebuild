import { GoTrash } from "react-icons/go";
import { useDeleteCommentMutation, useFetchCommentsQuery } from "../store";
import Skeleton from "./Skeleton";

function CommentItem({ gag }) {
  const { data, isFetching, error } = useFetchCommentsQuery(gag);
  const [deleteComment] = useDeleteCommentMutation();

  const handleDeleteComment = (id) => {
    console.log(id);
    deleteComment(id);
  };

  let content;
  if (isFetching) {
    content = <Skeleton times={3} className="active-skeleton" />;
  } else if (error) {
  } else {
    content = data.map((comment) => {
      return (
        <div className="comments-contant" key={comment.id}>
          <div className="comment-trash">
            <GoTrash
              onClick={() => {
                handleDeleteComment(comment.id);
              }}
            />
          </div>
          <div className="comment-text">{comment.commentText}</div>
        </div>
      );
    });
  }

  const withoutCommentMesseage = (
    <div className="no-comment">There is no comments, Be the first!</div>
  );
  return (
    <div className="gag-comments">
      <div className="comments-title">Comments:</div>
      <div>{data?.length === 0 ? withoutCommentMesseage : content}</div>
    </div>
  );
}

export default CommentItem;
