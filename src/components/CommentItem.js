function CommentItem({ gag }) {
  const { comments } = gag;

  const rendredComments = comments.map((comment) => {
    return (
      <div className="comments-contant" key={gag.id}>
        {comment}
      </div>
    );
  });
  return (
    <div className="gag-comments">
      <div className="comments-title">Comments:</div>
      <div>{rendredComments}</div>
    </div>
  );
}

export default CommentItem;
