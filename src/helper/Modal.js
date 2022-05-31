import "./Model.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect } from "react";
export default function Modal({ show, children, onClose }) {
    useEffect(()=>{
        document.body.style.maxHeight = window.innerWidth;
        document.body.style.overflow="hidden";
    })
  if (!show) return null;
  return (
    <div style={{"height":window.innerWidth}} className="position-absolute b-block top-0 start-0 bottom-0 end-0 bg-light d-flex modalWrapper justify-content-center align-items-center">
      <div className="position-relative d-flex justify-content-center align-items-center">
        <button onClick={onClose} className="position-absolute set translate-middle">
          <AiOutlineCloseCircle
            size={"1.2em"}
            color="green"
            style={{ cursor: "pointer" }}
          />
        </button>
        {children}
      </div>
    </div>
  );
}
