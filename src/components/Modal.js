import { ReactDOM } from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, actionBar, children }) {
  useEffect(() => {
    return document.body.classList.add("overflow-hidden");
  });

  return <div>Modal</div>;
}

export default Modal;
