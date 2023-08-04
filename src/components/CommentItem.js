function CommentItem({ gag }) {
  const { comments } = gag;
  console.log(comments);

  const rendredComments = comments.map((comment) => {
    return <div>{comment}</div>;
  });
  return <div className="commants">{rendredComments}</div>;
}

export default CommentItem;
