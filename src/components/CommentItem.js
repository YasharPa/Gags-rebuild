function CommentItem({ gag }) {
  const { comments } = gag;

  const rendredComments = comments.map((comment, index) => {
    return (
      <div className="comments-contant" key={gag.id + index}>
        {comment}
      </div>
    );
  });
  const withoutCommentMesseage = "There is no comments, Be the first!";
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
