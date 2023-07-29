import classNames from "classnames";

function Skeleton({ times, className }) {
  const outerClassName = classNames("outer-skeleton", className);
  const innerClassName = classNames("inner-skeleton");

  const boxes = Array(times)
    .fill(0)
    .map((_, index) => {
      return (
        <div key={index} className={outerClassName}>
          <div className={innerClassName} />
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
