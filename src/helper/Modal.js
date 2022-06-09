import "./Model.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState, useEffect } from "react";
export default function Modal({ show, children, onClose }) {
  useEffect(()=>{
    if (!show) {
      document.body.style.overflow = "visible";
    } else {
      document.body.style.overflow = "hidden";
    }
    return ()=>document.body.style.overflow = "visible";
  }, [show])
  if (!show) return null;
  return (
    <div className="position-absolute b-block top-0 start-0 bottom-0 end-0 d-flex modalWrapper justify-content-center align-items-center">
      <div className=" position-relative d-flex justify-content-center align-items-center">
        <AiOutlineCloseCircle
          size={"2em"}
          color="green"
          style={{ cursor: "pointer" }}
          className="position-absolute set translate-middle"
          onClick={onClose}
        />

        {children}
      </div>
    </div>
  );
}
