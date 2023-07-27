import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, actionBar, children }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="modal-closed"></div>
      <div className="modal-opend">
        <div className="modal-children">
          {children}
          <div className="action-bar">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
