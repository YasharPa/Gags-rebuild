import { useEffect, useRef } from "react";

function Pagination({ onIntersect }) {
  const observerRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting) {
        onIntersect();
      }
    }, options);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [onIntersect]);

  const observeElement = (element) => {
    if (observerRef.current && element) {
      observerRef.current.observe(element);
    }
  };

  return <div ref={observeElement}></div>;
}

export default Pagination;
