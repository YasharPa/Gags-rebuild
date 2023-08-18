import { GoTrash } from "react-icons/go";
import { useFetchCommentsQuery } from "../store";
import Skeleton from "./Skeleton";

function CommentItem({ gag }) {
  const { data, isFetching, error } = useFetchCommentsQuery(gag);
  // const { deleteComment } = useContext(GagsContext);
  const handleDeleteComment = (gag, id) => {
    console.log(id);
    // deleteComment(gag, id);
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
                handleDeleteComment(gag, comment.id);
              }}
            />
          </div>
          <div className="comment-text">{comment.text}</div>
        </div>
      );
    });
  }

  const withoutCommentMesseage = (
    <div className="no-comment">There is no comments, Be the first!</div>
  );
  return (
    <div className="gag-comments">
      <div className="commexxnts-title">Comments:</div>
      <div>{content}</div>
    </div>
  );
}

export default CommentItem;
